type WheaterSectionProps = {
  className?: string;
  isCollapsed: boolean;
};

const WeatherSection: React.FC<WheaterSectionProps> = ({ className, isCollapsed }) => {
  return (
    <div className={className}>
      <p>Weather</p>
    </div>
  );
};

export default WeatherSection;
