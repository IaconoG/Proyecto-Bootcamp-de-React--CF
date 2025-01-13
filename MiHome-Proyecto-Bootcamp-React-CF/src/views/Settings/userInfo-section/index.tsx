import React, { useEffect, useState } from "react";

import styles from "./UserInfoSection.module.css";

/* API */
import { fetchProvinces } from "../../../api/GeoRefArAPI/services/geoRefService";
import { Province, City } from "../../../api/GeoRefArAPI/models/geoRefModels";
/* Components */
import Form from "../../../components/Form";
import Select from "../../../components/Select";
// import Input from "../../../components/Input";
// import Datalist from "../../../components/Datalist";
/* Types */
import { Option } from "../../../components/Select";
import { FormDataType, UserData } from "../../../state/utils/types";
/* Validation */
// import { USER_FORM } from "../../../utils/validations";
const selectOptions: Option[] = [
  { value: "", label: "--- Selecciona una opcion ---" },
  { value: "estudiante", label: "Estudiante" },
  { value: "trabajador", label: "Trabajador" },
  { value: "otro", label: "Otro" },
];
/* Storage */
import userInfo from "../../../state/stores/userInfo/user-info";
import Datalist from "../../../components/Datalist/indext";

const UserInfoSection: React.FC = () => {
  const { userData, updateUserData } = userInfo();
  const [cities, setCities] = useState<City[]>([]);

  /*** PROVINCES ***/
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [isInputProvinceActive, setIsInputProvinceActive] =
    useState<boolean>(false);

  useEffect(() => {
    if (isInputProvinceActive && provinces.length === 0) {
      console.log("Fetching provinces...");
      fetchProvinces()
        .then((provinces: Province[]) => {
          setProvinces(provinces);
        })
        .catch((error) => console.error(error));
    }
  }, [isInputProvinceActive, provinces]);
  const handleInputProvinceFocus = () => {
    console.log("Focus");
    setIsInputProvinceActive(true);
  };
  const handleInputProvinceBlur = () => {
    console.log("Blur");
    setIsInputProvinceActive(false);
  };
  const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValidProvince = provinces.some((option) => option.value === value);
    if (isValidProvince) {
      console.log("Valid province");
      // fetchCities(value);
    } else {
      // FIXME: implement Zod error
      console.log("Invalid province");
    }
  };

  const handleSubmit = (formData: FormDataType) => {
    
    console.log("Form data: ", formData);
  };
    


    //
    return;
    // if (
    //   data.userName === userData.userName &&
    //   data.occupation === userData.occupation &&
    //   data.userLocation === userData.userLocation
    // ) {
    //   console.log(
    //     "No hubo necesidad de actualizar la informacion del usuario, era la misma que la anterior."
    //   );
    //   return;
    // } else {
    //   /* Submits the form data */
    //   updateUserData(data);
    // }

    /* Clear states after submit */
    setProvinces([]);
    setCities([]);
  };

  return (
    <>
      <h2 className={styles.title}>Informacion de Usuario</h2>
      <form
        action={handleSubmit}
        defaultValue={userData}
        className={styles.formLayout}
      >
        <input
          id="userName"
          name="userName"
          placeholder="Tu nombre de usuario"
          className={styles.input}
          maxLength={60}
        />
        <Select
          id="occupation"
          name="occupation"
          options={selectOptions}
          className={styles.selectStyles}
        />
        <div className={styles.formGroup}>
          <input
            id="province"
            type="text"
            name="province"
            list="province-options"
            placeholder="Selecciona o escribe una provincia"
            className={styles.input}
            onFocus={handleInputProvinceFocus}
            onBlur={handleInputProvinceBlur}
            onChange={handleProvinceChange}
            autoComplete="off"
          />
          <Datalist
            id="province-options"
            options={provinces}
            styles={styles.input}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Guardar
        </button>
      </form>
    </>
  );
};

export default UserInfoSection;


  {/* <Form
        defaultValues={userData}
        onSubmit={handleSubmitForm}
        formLayout={styles.formLayout}
        // validationRules={VALIDATION_RULES}
        resetForm={false}
      >
        <input
          id="userName"
          name="userName"
          placeholder="Tu nombre de usuario"
          className={styles.input}
          maxLength={60}
        />
        <Select
          id="occupation"
          name="occupation"
          options={selectOptions}
          className={styles.selectStyles}
        />
        <div className={styles.formGroup}>
          <input
            id="province"
            type="text"
            name="province"
            list="province-options"
            placeholder="Selecciona o escribe una provincia"
            className={styles.input}
            onFocus={handleInputProvinceFocus}
            onBlur={handleInputProvinceBlur}
            onChange={handleProvinceChange}
            autoComplete="off"
          />
          <Datalist
            id="province-options"
            options={provinces}
            styles={styles.input}
          />

        </div>
        <button type="submit" className={styles.btn}>
          Guardar
        </button>
      </Form> */}