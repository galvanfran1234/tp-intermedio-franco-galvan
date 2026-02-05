import * as mascotasModel from '../models/mascotas.model';
import { mascotasDTO, mascotas } from '../models/mascotas.model';

export const listMascotas = async (): Promise<mascotas[]> => {
  return mascotasModel.getAllMascotas();
};

export const addMascota = async (data: mascotasDTO): Promise<void> => {
  await mascotasModel.createMascota(data);
};

export const modifyMascotaById = async (id: number, data: mascotasDTO): Promise<void> => {
  await mascotasModel.updateMascotaById(id, data);
};

export const removeMascotaById = async (nombre: string): Promise<void> => {
  await mascotasModel.deleteMascotaByNombre(nombre);
};
export function removeMascotaByNombre(nombre: string) {
  throw new Error('Function not implemented.');
}

