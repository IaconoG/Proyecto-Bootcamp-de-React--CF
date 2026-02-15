/* components */
import Form from "../../../../../components/Form";
import Input from "../../../../../components/Form/Input";
import Label from "../../../../../components/Form/Label";
import Select from "../../../../../components/Form/Select";
import FormError from "../../../../../components/Form/FormError";
/* types */
import { UserInfoFormProps } from "../types/info-user-types";
import { OCCUPATION_OPTIONS_VALUES } from "../../../../../state/stores/userInfo/constants";
/* styles */
import styles from "../InfoUser.module.css";

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  onSubmit,
  values,
  errors,
  handleChange,
  children,
}) => {
  return (
    <Form onSubmit={onSubmit}>
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
          firstValue={{
            id: "0",
            value: "",
            label: "Selecciona tu ocupación",
          }}
          onChange={handleChange}
        />
        <FormError error={errors.occupation} />
      </div>
      {children}
      <button type="submit">Guardar</button>
    </Form>
  );
};

export default UserInfoForm;
