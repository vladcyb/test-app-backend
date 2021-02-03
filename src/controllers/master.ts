import { Request, Response } from 'express';
import { Master } from '../models/Master';

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Master.findAll();
    res.json({ ok: true, result });
  } catch (e) {
    res.json({ ok: false });
  }
};

const deleteMaster = async (req: Request, res: Response): Promise<void> => {
  try {
    await Master.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false });
  }
};

const addMaster = async (req: Request, res: Response): Promise<void> => {
  try {
    await Master.create(req.body);
    res.json({ ok: true });
  } catch (e) {
    const error = e.errors[0].message;
    res.json({ ok: false, error });
  }
};

export default {
  addMaster,
  deleteMaster,
  getAll,
};
