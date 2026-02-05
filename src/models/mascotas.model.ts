 import { RowDataPacket } from 'mysql2';
import pool from '../database/mysql';
export type mascotasRow = mascotas & RowDataPacket; 

export interface mascotas {
  id: number,
  nombre: string, 
  especie: string, 
  fecha_nacimiento: number, 
  id_dueno: number 
}

export interface mascotasDTO {
  nombre: string, 
  especie: string, 
  fecha_nacimiento: number, 
  id_dueno: number 
}

export const getAllMascotas = async (): Promise<mascotasRow[]> => {
  const [rows] = await pool.query<mascotasRow[]>(`
    SELECT m.id, m.nombre, m.especie, m.fecha_nacimiento, m.id_dueno
    FROM mascotas m
  `);

  return rows;
}

export const createMascota = async (data: mascotasDTO): Promise<void> => {
  const { nombre, especie, fecha_nacimiento, id_dueno } = data;

  await pool.query(
    'INSERT INTO mascotas (nombre, especie, fecha_nacimiento, id_dueno) VALUES (?, ?, ?, ?)',
    [nombre, especie, fecha_nacimiento, id_dueno]
  );
}

export const deleteMascotaByNombre = async (nombre: string): Promise<void> => {
  await pool.query(
    'DELETE FROM mascotas WHERE nombre = ?',
    [nombre]
  );
}

export const updateMascotaById = async (id: number, data: mascotasDTO): Promise<void> => {
  const { nombre, especie, fecha_nacimiento, id_dueno } = data;
  await pool.query(
    'UPDATE mascotas SET nombre = ?, especie = ?, fecha_nacimiento = ?, id_dueno = ? WHERE id = ?',
    [nombre, especie, fecha_nacimiento, id_dueno, id]
  );
}