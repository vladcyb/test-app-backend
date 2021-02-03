import { Request, Response } from 'express';
import { Specialization } from '../models/Specialization';


const getAll = async (req: Request, res: Response): Promise<void> => {
  const found = await Specialization.findAll();
  res.send(found);
};

const addSpecialization = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.body;
    await Specialization.create({ title });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false });
  }
};

const deleteSpecialization = async (req: Request, res: Response): Promise<void> => {
  try {
    await Specialization.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false });
  }
};

export default {
  getAll,
  addSpecialization,
  deleteSpecialization,
};
