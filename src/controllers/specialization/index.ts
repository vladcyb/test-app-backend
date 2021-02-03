import { Request, Response } from 'express';
import { Specialization } from '../../models/Specialization';
import { AddSpecializationBodyType, DeleteSpecializationBodyType } from './types';

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const found = await Specialization.findAll();
    res.json({ ok: true, result: found });
  } catch (e) {
    res.json({ ok: false });
  }
};

const addSpecialization = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.body as AddSpecializationBodyType;
    await Specialization.create({ title });
    res.json({ ok: true });
  } catch (e) {
    const error = e.errors[0].message;
    res.json({ ok: false, error });
  }
};

const deleteSpecialization = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body as DeleteSpecializationBodyType;
  try {
    await Specialization.destroy({
      where: {
        id,
      },
    });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false });
  }
};

export default {
  addSpecialization,
  deleteSpecialization,
  getAll,
};
