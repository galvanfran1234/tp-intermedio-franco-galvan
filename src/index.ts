import duenosrouter from './routes/duenos.routes';
import express, { Request, Response } from 'express';
import 'dotenv/config';
import loginrouter from './routes/login.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/dueno', duenosrouter);
app.use('/login',loginrouter); ;


app.get('/api/saludo', (req: Request, res: Response) => {
  res.json({ mensaje: 'Hola desde la API 🚀' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
  });

  import { authenticate, authorize } from './middlewares/auth.middleware';

// Ruta protegida (requiere autenticación)
app.get('/protected', authenticate, (req, res) => {
  res.json({
    message: 'Acceso permitido',
    user: req.veterinarios,
  });
});

// Ruta de administrador (requiere autenticación y rol admin)
app.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({
    message: 'Acceso de administrador permitido',
    user: req.veterinarios,
  });
});