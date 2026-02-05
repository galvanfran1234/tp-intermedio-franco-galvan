import { Router } from 'express';
import * as veterinarioscontroller from '../controllers/veterinarios.controller';
import { showVeterinarios } from '../controllers/veterinarios.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const veterinariosrouter: Router = Router();

veterinariosrouter.get('/', authenticate, showVeterinarios);
veterinariosrouter.post('/create', authorize, authenticate, veterinarioscontroller.createVeterinarios);
veterinariosrouter.put('/update/:id', authorize, authenticate, veterinarioscontroller.updateVeterinarios);
veterinariosrouter.delete('/delete/:nombre', authorize, authenticate, veterinarioscontroller.deleteVeterinarios);


export default veterinariosrouter;
