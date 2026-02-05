import * as historial_clinicoModel from '../models/historial_clinico.model';
import { historial_clinicoDTO, historial_clinico } from '../models/historial_clinico.model';

export const listHistorialClinico = async (): Promise<historial_clinico[]> => {
  return historial_clinicoModel.getAllHistorialClinico();
};

export const addHistorialClinico = async (data: historial_clinicoDTO): Promise<void> => {
  await historial_clinicoModel.createHistorialClinico(data);
};

export const modifyHistorialClinicoById = async (id: number, data: historial_clinicoDTO): Promise<void> => {
  await historial_clinicoModel.updateHistorialClinicoById(id, data);
};

export const removeHistorialClinicoById = async (id: number): Promise<void> => {
  await historial_clinicoModel.deleteHistorialClinicoById(id);
}
