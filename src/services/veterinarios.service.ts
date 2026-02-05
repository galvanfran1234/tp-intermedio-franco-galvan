import * as veterinariosModel from '../models/veterinarios.model';
import { veterinariosDTO, veterinarios } from '../models/veterinarios.model';

import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { JwtPayload, UserRole } from '../types/auth';


export const listVeterinarios = async (): Promise<veterinarios[]> => {
  return veterinariosModel.getAllVeterinarios();
};

export const addVeterinario = async (data: veterinariosDTO): Promise<void> => {
  await veterinariosModel.createVeterinario(data);
};

export const modifyVeterinarioById = async (id: number, data: veterinariosDTO): Promise<void> => {
  await veterinariosModel.updateVeterinarioById(id, data);
};

export const removeVeterinarioByNombre = async (nombre: string): Promise<void> => {
  await veterinariosModel.deleteVeterinarioBynombre(nombre);
};


if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET no definido');
}

const secretKey: string = process.env.JWT_SECRET;

export const register = async (
  username: string,
  email: string,
  password: string
): Promise<number> => {
  const hashedPassword = await bcrypt.hash(password, 10);

  await veterinariosModel.createVeterinario({
    email,
    password: hashedPassword,
  } as unknown as veterinariosDTO);
  
  return 0;
};

const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN as any) || '1h',
    issuer: 'curso-utn-backend',
  };

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const invalidCredentialsError = new Error('Credenciales inválidas');
  const user = await veterinariosModel.findVeterinarioByEmail(email) as unknown as veterinarios | null;
  
  if (!user) {
    throw invalidCredentialsError;
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    throw invalidCredentialsError;
  }
  
  const payload: JwtPayload = {
    id: String(user.id),
    role: user.role as UserRole,
    username: ''
  };
  
  const token = jwt.sign(payload, secretKey, { expiresIn: '24h' } as SignOptions);
  return token;
};