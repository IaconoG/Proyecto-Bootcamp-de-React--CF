import { useState } from "react";
/* API */
import {
  fetchProvinces,
  fetchCitiesByProvince,
} from "../../../../api/GeoRefArAPI/services/geoRefService";
/* Components */
import Card from "../../../../components/Card";
import { ToastContainer } from "../../../../components/Toast";
import { UserInfoForm, LocationFields } from "./components";
/* Hooks */
import useForm from "../../../../hooks/useForm";
import useToast, { ToastVariant } from "../../../../hooks/useToast";
/* Stores */
import { useUserInfoStore } from "../../../../state/stores/userInfo/userInfo-store";
/* Schemas */
import { userSchema } from "../../../../schemas/userSchema";
/* Types & Constants */
import { UserInfo } from "../../../../state/stores/userInfo/types";
import { OptionProps } from "../../../../components/Form/Option";
import SettingSection from "../SettingSection";

const InfoUser: React.FC = () => {
  const { updateUserInfo, getUserInfo } = useUserInfoStore();

  const { toasts, addToast } = useToast();

  const [provinces, setProvinces] = useState<OptionProps[]>([]);
  const [cities, setCities] = useState<OptionProps[]>([]);
  const [schema, setSchema] = useState(() => userSchema(provinces, cities));

  const { values, errors, hasChanges, handleChange, handleSubmit } =
    useForm<UserInfo>({
      initialValues: getUserInfo(),
      schema,
      addToast,
    });

  const [stillNoChanges, setStillNoChanges] = useState<boolean>(false);
  const [selectedProvince, setSelectedProvince] = useState<string>(
    values.location.province || "",
  );
  const [selectedCity, setSelectedCity] = useState<string>(
    values.location.city || "",
  );

  const handleProvinceClick = () => {
    if (provinces.length === 0) {
      fetchProvinces()
        .then((provinces) => {
          setProvinces(provinces);
          setSchema(userSchema(provinces, cities));
        })
        .catch((error) =>
          console.error("Error al obtener las provincias", error),
        );
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
        .catch((error) =>
          console.error("Error al obtener las ciudades", error),
        );
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
    if (result.success)
      addToast({ message: result.message, variant: ToastVariant.SUCCESS });
    else addToast({ message: result.message, variant: ToastVariant.ERROR });
  };

  return (
    <SettingSection
      title={
        values.userName
          ? `Información de ${values.userName}`
          : "Información del usuario"
      }
      description="Aquí puedes actualizar tu información personal, como tu nombre, ocupación y ubicación."
    >
      <Card>
        <UserInfoForm
          onSubmit={handleSubmit(onSubmit)}
          values={values}
          errors={errors}
          handleChange={handleChange}
          hasChanges={hasChanges}
          stillNoChanges={stillNoChanges}
        >
          <LocationFields
            selectedProvince={selectedProvince}
            selectedCity={selectedCity}
            provinces={provinces}
            cities={cities}
            errors={errors}
            handleProvinceChange={handleProvinceChange}
            handleCityChange={handleCityChange}
            handleProvinceClick={handleProvinceClick}
          />
        </UserInfoForm>

        {toasts.length > 0 && <ToastContainer toasts={toasts} />}
      </Card>
    </SettingSection>
  );
};

export default InfoUser;
