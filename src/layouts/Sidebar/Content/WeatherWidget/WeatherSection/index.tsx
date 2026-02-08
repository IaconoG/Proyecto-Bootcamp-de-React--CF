type WheaterSectionProps = {
  className?: string;
  isCollapsed: boolean;
};

const WeatherSection: React.FC<WheaterSectionProps> = ({
  className,
  isCollapsed,
}) => {
  return (
    <div className={className}>
      <p>Weather {isCollapsed ? "collapsed" : "visible"}</p>
    </div>
  );
};

export default WeatherSection;
