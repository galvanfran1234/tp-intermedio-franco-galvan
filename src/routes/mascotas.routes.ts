import { Router } from 'express';
import * as mascotascontroller from '../controllers/mascotas.controller';
import { showMascotas } from '../controllers/mascotas.controller';

const mascotasrouter: Router = Router();

mascotasrouter.get('/', showMascotas);
mascotasrouter.post('/create', mascotascontroller.createMascotas);
mascotasrouter.put('/update/:id', mascotascontroller.updateMascotas);
mascotasrouter.delete('/delete/:nombre', mascotascontroller.deleteMascotas);

export default mascotasrouter;