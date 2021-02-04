import specializationController from '../controllers/specialization';
import { Router } from 'express';

const router = Router();

router.get('/', specializationController.getAll);
router.delete('/', specializationController.deleteSpecialization);
router.post('/', specializationController.addSpecialization);
router.put('/', specializationController.editSpecialization);

export default router;
