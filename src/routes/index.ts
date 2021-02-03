import { Router } from 'express';
import specializationController from '../controllers/specialization';
import masterController from '../controllers/master';

const router = Router();

router.get('/specialization', specializationController.getAll);
router.delete('/specialization', specializationController.deleteSpecialization);
router.post('/specialization', specializationController.addSpecialization);

router.get('/master', masterController.getAll);

export default router;
