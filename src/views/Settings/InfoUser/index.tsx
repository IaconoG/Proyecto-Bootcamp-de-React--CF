import { useState, useEffect } from "react";
import styles from "./InfoUser.module.css";
/* API */
import { fetchProvinces } from "../../../api/GeoRefArAPI/services/geoRefService";
import { Province } from "../../../api/GeoRefArAPI/models/geoRefModels";
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
import { TOption } from "../../../components/Form/Option";

const InfoUser: React.FC = () => {
  const { updateUserInfo, getUserInfo } = useUserInfoStore();
  const { toasts, addToast } = useToast();
  const { values, errors, hasChanges, handleChange, handleSubmit } = useForm<UserInfo>({
    initialValues: getUserInfo(),
    schema: userSchema,
    addToast,
  });
  const [noChanges, setNoChanges] = useState<boolean>(false);

  // FIXME: Remove this when the API is available
  const [provinces, setProvinces] = useState<TOption[]>([
    { value: "Buenos Aires", label: "Buenos Aires" },
    { value: "Córdoba", label: "Córdoba" },
  ]);
  const [hasClickedProvince, setHasClickedProvince] = useState<boolean>(false);

  // useEffect(() => {
  //   if (hasClickedProvince) {
  //     fetchProvinces()
  //       .then((provinces) => {
  //         setProvinces(provinces);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }, [hasClickedProvince]);
  // const handleProvinceClick = () => {
  //   if (!hasClickedProvince) setHasClickedProvince(true);
  // };

  const onSubmit = (values: UserInfo) => {
    if (!hasChanges) {
      if (noChanges) return;
      addToast({
        message: "No se han realizado cambios en el formulario",
        variant: ToastVariant.INFO,
      });
      setNoChanges(true);
      return;
    }
    setNoChanges(false);
    const result = updateUserInfo(values);
    if (result.success) {
      addToast({ message: result.message, variant: ToastVariant.SUCCESS });
    } else {
      addToast({ message: result.message, variant: ToastVariant.ERROR });
    }
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
              value: option,
              label: option,
            }))}
            value={values.occupation}
            firstValue={{ value: "", label: "Selecciona tu ocupación" }}
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
            value={values.location.province ?? ""}
            onChange={handleChange}
            // onClick={handleProvinceClick}
            placeholder="Ingresa tu provincia"
            list="provinces"
            autoComplete="off"
          />
          <Datalist id="provinces" options={provinces} />
          {/* <FormError error={errors.location?.province} /> */}
        </div>
        <div className={styles.inputGroup}>
          <Label label="Ciudad" htmlFor="city" hidden />
          <Input
            id="city"
            htmlFor="city"
            type="text"
            name="location.city"
            value={values.location.city ?? ""}
            onChange={handleChange}
            placeholder="Ingresa tu ciudad"
            list="citys"
            autoComplete="off"
          />
          <Datalist
            id="citys"
            options={[
              { value: "Buenos Aires", label: "Buenos Aires" },
              { value: "Córdoba", label: "Córdoba" },
            ]}
          />
          {/* <FormError error={errors.location?.city} /> */}
        </div>
        <button type="submit">Guardar</button>
      </Form>
      {toasts.length > 0 && <ToastContainer toasts={toasts} />}
    </Card>
  );
};

export default InfoUser;

{
  /* {({ values, errors, handleChange }) => (
          <>
            <div>
              <Label label="Nombre" htmlFor="text" hidden />
              <Input
                type="text"
                name="name"
                placeholder="Nombre"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <Select
              id="province"
              name="province"
              options={[]}
              value={values.province}
              onChange={handleChange}
            />
            <Select
              id="city"
              name="city"
              options={[]}
              value={values.city}
              onChange={handleChange}
            />
            <button type="submit">Guardar</button>
          </>
        )}
      </Form> */
}
