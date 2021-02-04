import masterController from '../controllers/master';
import { Router } from 'express';

const router = Router();

router.get('/', masterController.getAll);
router.delete('/', masterController.deleteMaster);
router.post('/', masterController.addMaster);
router.put('/', masterController.editMaster);

export default router;
