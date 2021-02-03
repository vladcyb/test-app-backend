import { Router } from 'express';
import specializationController from '../controllers/specialization';

const router = Router();

router.get('/', specializationController.getAll);
router.delete('/', specializationController.deleteSpecialization);
router.post('/', specializationController.addSpecialization);

export default router;
