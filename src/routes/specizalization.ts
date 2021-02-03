import specializationController from '../controllers/specialization';
import { Router } from 'express';

const router = Router();

router.get('/', specializationController.getAll);
router.delete('/', specializationController.deleteSpecialization);
router.post('/', specializationController.addSpecialization);

export default router;
