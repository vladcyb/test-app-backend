import { Request, Response } from 'express';
import { Master } from '../../models/Master';
import { Specialization } from '../../models/Specialization';
import { AddMasterBodyType, DeleteMasterBodyType } from './types';


const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Master.findAll();
    res.json({ ok: true, result });
  } catch (e) {
    res.json({ ok: false });
  }
};

const deleteMaster = async (req: Request, res: Response): Promise<void> => {
  const { specId } = req.body as DeleteMasterBodyType;
  try {
    await Master.destroy({
      where: {
        id: specId,
      },
    });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false });
  }
};

const addMaster = async (req: Request, res: Response): Promise<void> => {
  const { specId } = req.body as AddMasterBodyType;
  try {
    const found = await Specialization.findOne({
      where: {
        id: specId,
      },
    });
    if (found) {
      await Master.create(req.body);
      res.json({ ok: true });
    } else {
      res.json({ ok: false, error: 'Specialization does not exist.' });
    }
  } catch (e) {
    res.json({ ok: false });
  }
};

export default {
  addMaster,
  deleteMaster,
  getAll,
};
