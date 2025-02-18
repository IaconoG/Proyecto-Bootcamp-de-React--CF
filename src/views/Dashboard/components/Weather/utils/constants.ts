import { Weather } from './types';

export const INITIAL_WATHER_STATE: Weather = {
  title: 'Weather',
  data: {
    location: {
      name: '',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: '',
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: '',
      temp_c: 0,
      temp_f: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      condition: {
        text: '',
        icon: '',
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: '',
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      is_day: 0,
      uv: 0,
      vis_km: 0,
      vis_miles: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
    forecast: {
      forecastDay: [],
    },
  },
  error: null,
};

export const LOCAL_STORAGE_WEATHER = 'weatherWidget';
