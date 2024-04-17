import { Weather } from './types';

export const INITIAL_WATHER_STATE: Weather = {
  title: 'Weather',
  data: undefined, // FIXME: Tipado
  error: null,
};

export const LOCAL_STORAGE_WEATHER = 'weatherWidget';
