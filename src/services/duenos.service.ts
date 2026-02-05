import * as duenosModel from '../models/duenos.model';
import { duenosDTO, duenos } from '../models/duenos.model';

export const listDuenos = async (): Promise<duenos[]> => {
  return duenosModel.getAllDuenos();
};

export const addDueno = async (data: duenosDTO): Promise<void> => {
  await duenosModel.createDueno(data);
};

export const modifyDuenoById = async (id: number, data: duenosDTO): Promise<void> => {
  await duenosModel.updateDuenoById(id, data);
};

export const removeDuenoByNombre = async (nombre: string): Promise<void> => {
  await duenosModel.deleteDuenoBynombre(nombre);
};
