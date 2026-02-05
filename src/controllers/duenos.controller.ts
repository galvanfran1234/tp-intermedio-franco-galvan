import { Request, Response } from 'express';
import * as duenosService from '../services/duenos.service';
import { duenosDTO, createDueno } from '../models/duenos.model';

export const showDuenos = async (req: Request, res: Response) =>{ try  {
  const duenos = await duenosService.listDuenos();
  res.status(200).json(duenos);} catch (error) {
    res.status(500).json({ error: 'Error al obtener los dueños' });
  }
};

export const createDuenos = async (req: Request, res: Response) => { try {
  const { nombre, apellido, telefono, direccion } = req.body;

  const newDueno: duenosDTO = {
    nombre,
    apellido,
    telefono,
    direccion
  };

  await duenosService.addDueno(newDueno);
  res
    .status(201)
    .json({ success: true, message: 'Dueño creado correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al crear el dueño' });
  }
};

export const updateDuenos = async (req: Request, res: Response) => { try {
  const id = parseInt(Array.isArray(req.params.id) ? req.params.id[0] : req.params.id, 10);
  const { nombre, apellido, telefono, direccion } = req.body;
    const updatedDueno: duenosDTO = {
        nombre,
        apellido,
        telefono,
        direccion
    };
    await duenosService.modifyDuenoById(id, updatedDueno);
    res
      .status(200)
      .json({ success: true, message: 'Dueño actualizado correctamente' })}
        catch (error) {
    res.status(500).json({ error: 'Error al actualizar el dueño' });
  }
};

export const deleteDuenos = async (req: Request, res: Response) => { try {
  const nombre = Array.isArray(req.params.nombre) ? req.params.nombre[0] : req.params.nombre;
    await duenosService.removeDuenoByNombre(nombre);
    res
      .status(200)
      .json({ success: true, message: 'Dueño eliminado correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al eliminar el dueño' });
  }
};