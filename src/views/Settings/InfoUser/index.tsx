import { useState } from "react";
import styles from "./InfoUser.module.css";
/* API */
import { fetchProvinces, fetchCitiesByProvince } from "../../../api/GeoRefArAPI/services/geoRefService";
/* Components */
import Form from "../../../components/Form";
import Card from "../../../components/Card";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import Select from "../../../components/Form/Select";
import Datalist from "../../../components/Form/Datalist";
import FormError from "../../../components/Form/FormError";
import { ToastContainer } from "../../../components/Toast";
/* Hooks */
import useForm from "../../../hooks/useForm";
import useToast, { ToastVariant } from "../../../hooks/useToast";
/* Stores */
import { useUserInfoStore } from "../../../state/stores/userInfo/userInfo-store";
/* Schemas */
import { userSchema } from "../../../schemas/userSchema";
/* Types & Constants */
import { UserInfo } from "../../../state/stores/userInfo/types";
import { OCCUPATION_OPTIONS_VALUES } from "../../../state/stores/userInfo/constants";
import { OptionProps } from "../../../components/Form/Option";

const InfoUser: React.FC = () => {
  const { updateUserInfo, getUserInfo } = useUserInfoStore();
  const { toasts, addToast } = useToast();
  const [provinces, setProvinces] = useState<OptionProps[]>([]);
  const [cities, setCities] = useState<OptionProps[]>([]);
  const [schema, setSchema] = useState(() => userSchema(provinces, cities));
  const { values, errors, hasChanges, handleChange, handleSubmit } = useForm<UserInfo>({
    initialValues: getUserInfo(),
    schema,
    addToast,
  });
  const [stillNoChanges, setStillNoChanges] = useState<boolean>(false);
  const [selectedProvince, setSelectedProvince] = useState<string>(values.location.province || "");
  const [selectedCity, setSelectedCity] = useState<string>(values.location.city || "");

  const handleProvinceClick = () => {
    if (provinces.length === 0) {
      fetchProvinces()
        .then((provinces) => {
          setProvinces(provinces);
          setSchema(userSchema(provinces, cities));
        })
        .catch((error) => console.error("Error al obtener las provincias", error));
    }
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedProvince(selectedValue);
    if (selectedValue === "") {
      values.location.city = "";
      setSelectedCity("");
      setCities([]);
    }
    handleChange(e);
    if (selectedValue) {
      fetchCitiesByProvince(selectedValue)
        .then((fetchedCities) => {
          setCities(fetchedCities);
          setSchema(userSchema(provinces, fetchedCities));
        })
        .catch((error) => console.error("Error al obtener las ciudades", error));
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedCity(selectedValue);
    handleChange(e);
  };

  const onSubmit = (values: UserInfo) => {
    if (!hasChanges) {
      if (stillNoChanges) return;
      addToast({
        message: "No se han realizado cambios en el formulario.",
        variant: ToastVariant.INFO,
      });
      setStillNoChanges(true);
      return;
    }
    setStillNoChanges(false);
    const result = updateUserInfo(values);
    if (result.success) addToast({ message: result.message, variant: ToastVariant.SUCCESS });
    else addToast({ message: result.message, variant: ToastVariant.ERROR });
  };
  return (
    <Card>
      <p>Información personal {values.userName ? `de ${values.userName}` : ""}</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <Label label="Nombre" htmlFor="userName" hidden />
          <Input
            id="userName"
            htmlFor="userName"
            type="text"
            name="userName"
            value={values.userName}
            placeholder="Ingrese su nombre"
            onChange={handleChange}
            autoComplete="off"
          />
          <FormError error={errors.userName ?? ""} />
        </div>
        <div className={styles.inputGroup}>
          <Label label="Ocupación" htmlFor="text" hidden />
          <Select
            id="occupation"
            name="occupation"
            options={OCCUPATION_OPTIONS_VALUES.map((option) => ({
              id: option,
              value: option,
              label: option,
            }))}
            value={values.occupation}
            firstValue={{ id: "0", value: "", label: "Selecciona tu ocupación" }}
            onChange={handleChange}
          />
          <FormError error={errors.occupation} />
        </div>
        <div className={styles.inputGroup}>
          <Label label="Provincia" htmlFor="province" hidden />
          <Input
            id="province"
            htmlFor="province"
            type="text"
            name="location.province"
            value={selectedProvince}
            onChange={handleProvinceChange}
            onClick={handleProvinceClick}
            placeholder="Ingresa tu provincia"
            list="provinces"
            autoComplete="off"
          />
          <Datalist id="provinces" options={provinces} />
          <FormError error={errors.province} />
        </div>
        <div className={styles.inputGroup}>
          <Label label="Ciudad" htmlFor="city" hidden />
          <Input
            id="city"
            htmlFor="city"
            type="text"
            name="location.city"
            value={selectedCity}
            onChange={handleCityChange}
            placeholder="Ingresa tu ciudad"
            list="citys"
            autoComplete="off"
            // disabled={!selectedProvince} // FIXME: El disable tambien debe ser por estilos, ademas cuando ya se selecciono la pronvicia previamente el selectedProvince no deberia inicialr null
          />
          <Datalist id="citys" options={cities} />
          <FormError error={errors.city} />
        </div>
        <button type="submit">Guardar</button>
      </Form>
      {toasts.length > 0 && <ToastContainer toasts={toasts} />}
    </Card>
  );
};

export default InfoUser;

// Componente de localidad compuesta
