import { RowDataPacket } from 'mysql2';
import pool from '../database/mysql';
export type duenosRow = duenos & RowDataPacket;


export interface duenos {
  id: number,
  nombre: string, 
  apellido: string, 
  telefono: number, 
  direccion: string 
}

export interface duenosDTO {
  nombre: string, 
  apellido: string, 
  telefono: number, 
  direccion: string 
}

export const getAllDuenos = async (): Promise<duenosRow[]> => {
  const [rows] = await pool.query<duenosRow[]>(`
    SELECT d.id, d.nombre, d.apellido, d.telefono, d.direccion
    FROM duenos d
  `);

  return rows;
}

export const createDueno = async (data: duenosDTO): Promise<void> => {
  const { nombre, apellido, telefono, direccion } = data;

  await pool.query(
    'INSERT INTO duenos (nombre, apellido, telefono, direccion) VALUES (?, ?, ?, ?)',
    [nombre, apellido, telefono, direccion]
  );
}

export const deleteDuenoBynombre = async (nombre: string): Promise<void> => {
  await pool.query(
    'DELETE FROM duenos WHERE nombre = ?',
    [nombre]
  );
}

export const updateDuenoById = async (id: number, data: duenosDTO): Promise<void> => {
  const { nombre, apellido, telefono, direccion } = data;
  await pool.query(
    'UPDATE duenos SET nombre = ?, apellido = ?, telefono = ?, direccion = ? WHERE id = ?',
    [nombre, apellido, telefono, direccion, id]
  );
}