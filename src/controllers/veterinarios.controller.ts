import { Request, Response } from 'express';
import * as veterinariosService from '../services/veterinarios.service';
import { veterinariosDTO, createVeterinario } from '../models/veterinarios.model';

export const showVeterinarios = async (req: Request, res: Response) =>{ try  {
  const veterinarios = await veterinariosService.listVeterinarios();
  res.status(200).json(veterinarios);} catch (error) {
    res.status(500).json({ error: 'Error al obtener los veterinarios' });
  }
};

export const createVeterinarios = async (req: Request, res: Response) => { try {
  const { nombre, apellido, matricula, especialidad } = req.body;

  const newVeterinario: veterinariosDTO = {
    nombre,
    apellido,
    matricula,
    especialidad
  };

  await veterinariosService.addVeterinario(newVeterinario);
  res
    .status(201)
    .json({ success: true, message: 'Veterinario creado correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al crear el veterinario' });
  }
};

export const updateVeterinarios = async (req: Request, res: Response) => { try {
  const id = parseInt(Array.isArray(req.params.id) ? req.params.id[0] : req.params.id, 10);
  const { nombre, apellido, matricula, especialidad } = req.body;
    const updatedVeterinario: veterinariosDTO = {
        nombre,
        apellido,
        matricula,
        especialidad  
    };
    await veterinariosService.modifyVeterinarioById(id, updatedVeterinario);
    res
      .status(200)
      .json({ success: true, message: 'Veterinario actualizado correctamente' })}
        catch (error) {
    res.status(500).json({ error: 'Error al actualizar el veterinario' });
  }
};

export const deleteVeterinarios = async (req: Request, res: Response) => { try {
  const nombre = Array.isArray(req.params.nombre) ? req.params.nombre[0] : req.params.nombre;
    await veterinariosService.removeVeterinarioByNombre(nombre);
    res
      .status(200)
      .json({ success: true, message: 'Veterinario eliminado correctamente' })} catch (error) {
    res.status(500).json({ error: 'Error al eliminar el veterinario' });
  }
};