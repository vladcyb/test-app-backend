import { Request, Response } from 'express';

const getAll = (req: Request, res: Response): void => {
  res.json([]);
};

export default {
  getAll,
};
