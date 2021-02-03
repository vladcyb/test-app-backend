import { Router } from 'express';
import specializationRoutes from '../controllers/specialization';
import masterRoutes from '../controllers/master';

const router = Router();

router.get('/specialization', specializationRoutes.getAll);
router.delete('/specialization', specializationRoutes.deleteSpecialization);
router.post('/specialization', specializationRoutes.addSpecialization);

router.get('/master', masterRoutes.getAll);

export default router;
