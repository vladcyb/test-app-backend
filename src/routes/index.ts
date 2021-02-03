import specializationRoutes from './specizalization';
import masterRoutes from './master';
import { Router } from 'express';


const router = Router();

router.use('/specialization', specializationRoutes);
router.use('/master', masterRoutes);

export default router;
