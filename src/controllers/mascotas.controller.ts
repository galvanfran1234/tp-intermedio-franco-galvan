import { Request, Response } from 'express';
import * as mascotasService from '../services/mascotas.service';
import { mascotasDTO, createMascota } from '../models/mascotas.model';

export const showMascotas = async (req: Request, res: Response) =>{ try  {
  const mascotas = await mascotasService.listMascotas();
  res.status(200).json(mascotas);} catch (error) {
    res.status(500).json({ error: 'Error al obtener las mascotas' });
  }
};

export const createMascotas = async (req: Request, res: Response) => { try {
  const { nombre, especie, fecha_nacimiento, id_dueno } = req.body;

  const newMascota: mascotasDTO = {
    nombre,
    especie,
    fecha_nacimiento,
    id_dueno
  };

  await mascotasService.addMascota(newMascota);
  res
    .status(201)
    .json({ success: true, message: 'Mascota creada correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al crear la mascota' });
  }
};

export const updateMascotas = async (req: Request, res: Response) => { try {
  const id = parseInt(Array.isArray(req.params.id) ? req.params.id[0] : req.params.id, 10);
  const { nombre, especie, fecha_nacimiento, id_dueno } = req.body;
    const updatedMascota: mascotasDTO = {
        nombre,
        especie,
        fecha_nacimiento,
        id_dueno
    };
    await mascotasService.modifyMascotaById(id, updatedMascota);
    res
      .status(200)
      .json({ success: true, message: 'Mascota actualizada correctamente' })}
        catch (error) {
    res.status(500).json({ error: 'Error al actualizar la mascota' });
  }
};

export const deleteMascotas = async (req: Request, res: Response) => { try {
  const nombre = Array.isArray(req.params.nombre) ? req.params.nombre[0] : req.params.nombre;
    await mascotasService.removeMascotaByNombre(nombre);
    res
      .status(200)
      .json({ success: true, message: 'Mascota eliminada correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al eliminar la mascota' });
  }
};