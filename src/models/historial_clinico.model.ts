import { RowDataPacket } from 'mysql2';
import pool from '../database/mysql';
export type historial_clinicoRow = historial_clinico & RowDataPacket;

export interface historial_clinico {
id: number,
id_mascota: number,
id_veterinario: number,
fecha_registro: Date, 
descripcion: string 
}

export interface historial_clinicoDTO {
  id_mascota: number,
  id_veterinario: number,
  fecha_registro: Date, 
  descripcion: string 
}

export const getAllHistorialClinico = async (): Promise<historial_clinicoRow[]> => {
  const [rows] = await pool.query<historial_clinicoRow[]>(`
    SELECT h.id, h.id_mascota, h.id_veterinario, h.fecha_registro, h.descripcion
    FROM historial_clinico h
  `);

  return rows;
}

export const createHistorialClinico = async (data: historial_clinicoDTO): Promise<void> => {
  const { id_mascota, id_veterinario, fecha_registro, descripcion } = data;

  await pool.query(
    'INSERT INTO historial_clinico (id_mascota, id_veterinario, fecha_registro, descripcion) VALUES (?, ?, ?, ?)',
    [data.id_mascota, data.id_veterinario, data.fecha_registro, data.descripcion]
  );
}

export const deleteHistorialClinicoById = async (id: number): Promise<void> => {
  await pool.query(
    'DELETE FROM historial_clinico WHERE id = ?',
    [id]
  );
}

export const updateHistorialClinicoById = async (id: number, data: historial_clinicoDTO): Promise<void> => {
  const { id_mascota, id_veterinario, fecha_registro, descripcion } = data;
  await pool.query(
    'UPDATE historial_clinico SET id_mascota = ?, id_veterinario = ?, fecha_registro = ?, descripcion = ? WHERE id = ?',
    [id_mascota, id_veterinario, fecha_registro, descripcion, id]
  );
}