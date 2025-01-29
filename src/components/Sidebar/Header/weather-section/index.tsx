type TimeSectionProps = {
  className?: string;
};

const WeatherSection: React.FC<TimeSectionProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>Weather</p>
    </div>
  );
};

export default WeatherSection;
