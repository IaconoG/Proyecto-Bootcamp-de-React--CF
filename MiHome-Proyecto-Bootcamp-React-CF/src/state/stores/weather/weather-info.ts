import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  INITIAL_WATHER_STATE,
  LOCAL_STORAGE_WEATHER,
} from "../../../views/Dashboard/components/Weather/utils/constants";
import { Weather } from "../../../views/Dashboard/components/Weather/utils/types";
import {
  CurrentElement,
  ForecastDayData,
  LocationElement,
} from "../../../api/WeatherAPI/models/wather";
import {
  fetchForecastWeatherTest,
  fetchForecastWeatherData,
} from "../../../api/WeatherAPI/services/weatherService";
import { findCodeIconWithWeatherConditionCode } from "../../../api/WeatherAPI/utils/helpers";
import { formatDateLocalTime } from "./helper";
import { UserLocation } from "../../utils/types";

type Actions = {
  isDataEmpty: () => boolean;
  setWeatherData: (location: string) => void; // Llamamos a la api
  // Getters
  getLocation: () => LocationElement | undefined;
  getCurrent: () => CurrentElement | undefined;
  getForecastDats: () => ForecastDayData[] | undefined;
  // Sidebard actions
  getLocationLocalTime: () => string | undefined;
  getLocationName: () => string | undefined;
  getCurrentTempC: () => number | undefined;
  getCurrentConditionText: () => string | undefined;
  getCurrentConditionIcon: () => string | undefined; // Devolver el src de la imagen segun dia o noche y el codigo del icono
  // Para el mini view no se q poner kjjj
  // Para el full view podria hacer actios para ciertos elementos como el astro, el forecast de cierto intervalo de tiempo, etc
  // Utils
  getCurrentIsDay: () => boolean | undefined;
  resetWeatherData: () => void;
};
type State = Weather;

const weatherInfo = create<State & Actions>()(
  immer(
    persist(
      (set, get) => ({
        ...INITIAL_WATHER_STATE,

        //
        isDataEmpty: () => {
          return get().data === undefined;
        },
        setWeatherData: async (location: string) => {
          // console.log("call api? ", location);
          // if (location.emp) {
          //   // reset data
          //   set((state) => {
          //     state.data = INITIAL_WATHER_STATE.data;
          //   });
          //   return;
          // }
          // console.log("call api ", location);
          // const weatherData = await fetchForecastWeatherData({
          //   localidad: location,
          // });
          // set((state) => {
          //   state.data = weatherData;
          // });
        },
        // Getters
        getLocation: () => get().data?.location,
        getCurrent: () => get().data?.current,
        getForecastDats: () => get().data?.forecast.forecastDay,
        // Sidebard actions
        getLocationLocalTime: () => {
          const fixMinutes: number = 2; // La hora que devuelve la api esta atrazada 2 minutos
          const localTime: string = get()?.data?.location.localtime || "";

          const date: Date = new Date(localTime);
          date.setMinutes(date.getMinutes() + fixMinutes);

          const localTimeFixed: string = formatDateLocalTime(date); // 'YYYY-MM-DD hh:mm'
          return localTimeFixed;
        },
        getLocationName: () => get().data?.location.name,
        getCurrentTempC: () => get().data?.current.temp_c,
        getCurrentConditionText: () => get().data?.current.condition.text,
        getCurrentConditionIcon: () => {
          const currentData = get().data?.current;
          if (!currentData) return undefined;

          const isDay = currentData.is_day === 1;
          const codeIcon = findCodeIconWithWeatherConditionCode(
            currentData.condition.code
          );
          return isDay ? `day/${codeIcon}.png` : `night/${codeIcon}.png`;
        },
        // FullView actions
        // MiniView actions
        // Utils
        getCurrentIsDay: () => get().data?.current.is_day === 1,
        resetWeatherData: () => {
          set((state) => {
            state.data = INITIAL_WATHER_STATE.data;
          });
        },
      }),

      {
        name: LOCAL_STORAGE_WEATHER,
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default weatherInfo;

// TODO: RESOLVER CUANDO SE LLAMA A LA API Y SE OBTIENE UN CODIGO DE ERROR
// XXX: 1006 -> No se ha encontrado la localidad
// https://www.weatherapi.com/docs/ -> API Error Codes
