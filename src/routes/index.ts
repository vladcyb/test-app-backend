import specializationRoute from './specizalization';
import masterRouter from './master';
import { Router } from 'express';


const router = Router();

router.use('/specialization', specializationRoute);
router.use('/master', masterRouter);

export default router;
