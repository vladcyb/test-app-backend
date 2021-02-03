import { Request, Response } from 'express';
import { Master } from '../models/Master';

const getAll = (req: Request, res: Response): void => {
  const found = Master.findAll();
  res.json(found);
};

export default {
  getAll,
};
