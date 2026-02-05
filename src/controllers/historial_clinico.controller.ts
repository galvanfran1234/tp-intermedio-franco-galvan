import { Request, Response } from 'express';
import * as historial_clinicoService from '../services/historial_clinico.service';
import { historial_clinicoDTO } from '../models/historial_clinico.model';

export const showHistorialClinico = async (req: Request, res: Response) =>{ try  {
  const historial_clinico = await historial_clinicoService.listHistorialClinico();
  res.status(200).json(historial_clinico);} catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial clínico' });
  }
};

export const createHistorialClinico = async (req: Request, res: Response) => { try {
  const { nombre, apellido, telefono, direccion } = req.body;

  const newHistorialClinico: historial_clinicoDTO = {
   id_mascota: req.body.id_mascota,
  id_veterinario: req.body.id_veterinario,
  fecha_registro: req.body.fecha_registro,
  descripcion: req.body.descripcion
  };

  await historial_clinicoService.addHistorialClinico(newHistorialClinico);
  res
    .status(201)
    .json({ success: true, message: 'Historial clínico creado correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al crear el historial clínico' });
  }
};

export const updateHistorialClinico = async (req: Request, res: Response) => { try {
  const id = parseInt(Array.isArray(req.params.id) ? req.params.id[0] : req.params.id, 10);
  const { id_mascota, id_veterinario, fecha_registro, descripcion } = req.body;
    const updatedHistorialClinico: historial_clinicoDTO = {
        id_mascota,
        id_veterinario,
        fecha_registro,
        descripcion
    };
    await historial_clinicoService.modifyHistorialClinicoById(id, updatedHistorialClinico);
    res
      .status(200)
      .json({ success: true, message: 'Historial clínico actualizado correctamente' })}
        catch (error) {
    res.status(500).json({ error: 'Error al actualizar el historial clínico' });
  }
};

export const deleteHistorialClinico = async (req: Request, res: Response) => { try {
  const nombre = parseInt(Array.isArray(req.params.id) ? req.params.id[0] : req.params.id, 10);
    await historial_clinicoService.removeHistorialClinicoById(nombre);
    res
      .status(200)
      .json({ success: true, message: 'Historial clínico eliminado correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al eliminar el historial clínico' });
  }
};