export interface ApiProvince {
  id: string;
  nombre: string;
}
export type ApiDataProvincias = {
  cantidad: number;
  inicio: number;
  provincias: ApiProvince[];
};

export interface ApiCity {
  id: string;
  nombre: string;
  categoria: string;
}
export type ApiDataCiudades = {
  cantidad: number;
  inicio: number;
  localidades: ApiCity[];
};
