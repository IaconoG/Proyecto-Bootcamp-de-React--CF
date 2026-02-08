import { useState } from "react";
import { z, ZodSchema } from "zod";
import { AddToastProps, ToastVariant } from "./useToast";

interface UseFormProps<T> {
  initialValues: T;
  schema: ZodSchema<T>;
  addToast: { (props: AddToastProps): void };
}

/**
 * Hook personalizado que maneja el estado de un formulario, incluyendo los valores actuales,
 * los errores de validación, y las funciones para manejar los cambios de valor y
 * el envío del formulario.
 * Este hook utiliza la librería `zod` para validar los valores del formulario de acuerdo
 * a un esquema de validación proporcionado.
 *
 * @param initialValues Es un objeto que contiene los valores iniciales del formulario.
 * @param schema Esquema de validación de los valores del formulario.
 * @returns Un objeto con los valores actuales del formulario, los errores de validación,
 * una función para manejar los cambios de valor en los inputs y una función
 * para manejar el envío del formulario.
 */

const useForm = <T>({ initialValues, schema, addToast }: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /**
   * Maneja los cambios de valor en los inputs del formulario. Esta función se activa
   * cada vez que se modifica el valor de un input, ya sea de tipo `<input>` o `<select>`.
   * Actualiza el estado de los valores del formulario de acuerdo a la estructura del formulario,
   * ya sea para campos simples o anidados (como objetos dentro de un formulario).
   *
   * @param e El evento de cambio del input, que contiene el nombre del campo y su nuevo valor.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValues((prev) => {
      const keys = name.split(".");
      if (keys.length > 1) {
        const [parentKey, childKey] = keys as [keyof T, string];

        return {
          ...prev,
          [parentKey]: {
            ...(prev[parentKey] || {}),
            [childKey]: value,
          },
        };
      }

      return { ...prev, [name]: value };
    });
  };

  /**
   * Maneja el envío del formulario. Se encarga de prevenir el comportamiento predeterminado
   * del evento de envío del formulario, y valida los valores del formulario con el esquema
   * proporcionado. Si los valores son válidos, ejecuta la función `onSubmit` con los valores
   * actuales del formulario como parámetro.
   * Si los valores no son válidos, captura los errores de validación y los guarda en el estado de errores.
   * Además, muestra un mensaje de error en un toast para informar al usuario que debe completar
   * correctamente los campos del formulario.
   * Si el formulario no ha tenido cambios, ejecuta la función `onSubmit` sin validar los valores del formulario.
   *
   * @param onSubmit Función que se ejecuta cuando el formulario es válido. Recibe los valores actuales del formulario como parámetro.
   */
  const handleSubmit = (onSubmit: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasChanges) {
      setErrors({});
      onSubmit(values);
    } else {
      try {
        const parsedValues = schema.parse(values);
        onSubmit(parsedValues);
        setErrors({});
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors: Record<string, any> = {};
          error.errors.forEach((err) => {
            const key = err.path[err.path.length - 1];
            newErrors[key] = err.message;
          });
          setErrors(newErrors);
          if (newErrors.warning) addToast({ message: newErrors.warning, variant: ToastVariant.WARNING });
          addToast({
            message: "Por favor, complete correctamente los campos del formulario",
            variant: ToastVariant.ERROR,
          });
        }
      }
    }
  };

  /**
   * Compara los valores actuales del formulario con los valores iniciales y devuelve un booleano
   * que indica si ha habido cambios en el formulario.
   * Se utiliza para habilitar o deshabilitar el botón de "Guardar cambios" en el formulario.
   * @returns Un booleano que indica si ha habido cambios en el formulario.
   **/
  const hasChanges = JSON.stringify(values) !== JSON.stringify(initialValues);

  return { values, errors, hasChanges, handleChange, handleSubmit };
};

export default useForm;
