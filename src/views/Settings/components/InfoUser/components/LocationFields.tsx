/* components */
import Input from "../../../../../components/Form/Input";
import Label from "../../../../../components/Form/Label";
import Datalist from "../../../../../components/Form/Datalist";
import FormError from "../../../../../components/Form/FormError";
/* types */
import { LocationFieldsProps } from "../types/info-user-types";
/* styles */
import styles from "../InfoUser.module.css";

const LocationFields: React.FC<LocationFieldsProps> = ({
  selectedProvince,
  selectedCity,
  provinces,
  cities,
  errors,
  handleProvinceChange,
  handleCityChange,
  handleProvinceClick,
}) => {
  return (
    <>
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
    </>
  );
};

export default LocationFields;
