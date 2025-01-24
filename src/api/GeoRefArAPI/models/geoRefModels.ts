import { Options } from "../../../state/utils/types";

export interface Province extends Options {}
export interface City extends Options {}

export interface ApiProvince {
  id: string;
  nombre: string;
}
export type ApiDataProvincias = {
  cantidad: number;
  inicio: number;
  parametros: {};
  provincias: ApiProvince[];
};
