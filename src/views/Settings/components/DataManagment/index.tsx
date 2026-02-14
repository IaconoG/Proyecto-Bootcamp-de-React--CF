import SettingSection from "../SettingSection";

const DataManagment: React.FC = () => {
  return (
    <SettingSection
      title="Gestión de datos"
      description="Aquí se podrá exportar/importar datos por módulo (Balance, ToDo, Calendar, etc.)."
    >
      <p>Aquí iría la configuración de la gestión de datos</p>
    </SettingSection>
  );
};

export default DataManagment;
