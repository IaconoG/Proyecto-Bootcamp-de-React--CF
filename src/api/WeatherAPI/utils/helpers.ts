import weather_conditions from '../../../api/WeatherAPI/data/weather_conditions.json';

export const findCodeIconWithWeatherConditionCode = (
  code: number
): number | undefined => {
  const wheaterConditoinFound = weather_conditions.find(
    (condition) => condition.code === code
  );
  return wheaterConditoinFound?.icon;
};
