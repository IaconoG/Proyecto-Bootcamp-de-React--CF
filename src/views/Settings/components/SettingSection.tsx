type SettingSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const SettingSection: React.FC<SettingSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <div>{children}</div>
    </section>
  );
};

export default SettingSection;
