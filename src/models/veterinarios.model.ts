import { RowDataPacket } from 'mysql2';
import pool from '../database/mysql';
import { UserRole } from '../types/auth';
import e from 'express';
export type veterinariosRow = veterinarios & RowDataPacket;


export interface veterinarios {
  role: UserRole;
  password: string;
  id: number,
  nombre: string, 
  apellido: string,
  email: string,
  matricula: string, 
  especialidad: string
}

export interface bveterinario {
  username: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface veterinariosDTO {
  nombre: string, 
  apellido: string,
  email: string,
  password: string,
  matricula: string, 
  especialidad: string 
}

export const getAllVeterinarios = async (): Promise<veterinariosRow[]> => {
  const [rows] = await pool.query<veterinariosRow[]>(`
    SELECT v.id, v.nombre, v.apellido, v.matricula, v.especialidad
    FROM veterinarios v
  `);

  return rows;
}

export const createVeterinario = async (data: bveterinario): Promise<void> => {
  const { username, email, password, role } = data;

  await pool.query(
    'INSERT INTO veterinarios (nombre, email, password, role) VALUES (?, ?, ?, ?)',
    [username, email, password, role]
  );
}

export const deleteVeterinarioBynombre = async (nombre: string): Promise<void> => {
  await pool.query(
    'DELETE FROM veterinarios WHERE nombre = ?',
    [nombre]
  );
}

export const updateVeterinarioById = async (id: number, data: veterinariosDTO): Promise<void> => {
  const { nombre, apellido, matricula, especialidad } = data;
  await pool.query(
    'UPDATE veterinarios SET nombre = ?,  apellido = ?, matricula = ?, especialidad = ? WHERE id = ?',
    [nombre, apellido, matricula, especialidad, id]
  );
}

export function findVeterinarioByEmail(email: string) {
  throw new Error('Function not implemented.');
}
export function findOne(arg0: { email: string; }) {
  throw new Error('Function not implemented.');
}

