export interface WeatherData {
  location: LocationElement;
  current: CurrentElement;
  forecast: {
    forecastDay: ForecastDayData[]; // 3 (max free)
  };
}

export interface LocationElement {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string; // Timezone name
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentElement {
  last_updated_epoch: number; // Local time when the real time data was updated in unix time. // unix time is seconds since 1970
  last_updated: string; // Local time when the real time data was updated.
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: ConditionElement;
  wind_mph: number; // Wind speed in miles per hour
  wind_kph: number; // Wind speed in kilometer per hour
  wind_degree: number; // Wind direction in degrees
  wind_dir: string; // Wind direction as 16 point compass. e.g.: N, NW, W, SW, S, SE, E, NE
  pressure_mb: number; // Pressure in millibars
  pressure_in: number; // Pressure in inches
  precip_mm: number; // Precipitation in millimeters
  precip_in: number; // Precipitation in inches
  humidity: number; // %
  cloud: number; // %
  is_day: number; // 0 or 1
  uv: number;
  vis_km: number; // Visibility in kilometers
  vis_miles: number; // Visibility in miles
  gust_mph: number; // Wind gust in miles per hour
  gust_kph: number; // Wind gust in kilometer per hour
}
interface ConditionElement {
  text: string; // type
  icon: string;
  code: number;
}

export interface ForecastDayData {
  date: string;
  date_epoch: number;
  day: DayElement;
  astro: AstroElement;
  hour: HourElement[]; // 24
}

interface DayElement {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: ConditionElement;
  uv: number;
  daily_will_it_rain: number; // 0 or 1 Will it rain?
  daily_chance_of_rain: number; // % Chance of rain
  daily_will_it_snow: number; // 0 or 1 Will it snow?
  daily_chance_of_snow: number; // % Chance of snow
}

interface AstroElement {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: MoonPhases;
  moon_illumination: number;
  is_moon_up: number; // 0 or 1
  is_sun_up: number; // 0 or 1
}

type MoonPhases =
  | 'New Moon'
  | 'Waxing Crescent'
  | 'First Quarter'
  | 'Waxing Gibbous'
  | 'Full Moon'
  | 'Waning Gibbous'
  | 'Last Quarter'
  | 'Waning Crescent';

interface HourElement {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number; // 0 or 1
  condition: ConditionElement;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number; // rocio
  dewpoint_f: number;
  will_it_rain: number; // 0 or 1
  chance_of_rain: number; // %
  will_it_snow: number; // 0 or 1
  chance_of_snow: number; // %
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}
