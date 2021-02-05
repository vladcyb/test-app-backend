import { Request, Response } from 'express';
import { Specialization } from '../../models/Specialization';
import { AddSpecializationBodyType, SpecializationType } from './types';
import { serverError } from '../../shared/constants';

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
    const result = await Specialization.create({ title });
    res.json({ ok: true, result });
  } catch (e) {
    const error = e.errors[0].message;
    res.json({ ok: false, error });
  }
};

const deleteSpecialization = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!id) {
    res.json({ ok: false, error: 'Enter \'id\'!' });
    return;
  }
  try {
    await Specialization.destroy({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ ok: true });
  } catch (e) {
    console.log(e);
    res.json({ ok: false });
  }
};

const editSpecialization = async (req: Request, res: Response): Promise<void> => {
  const { id, title } = req.body as SpecializationType;
  try {
    if (!id) {
      res.json({ ok: false, error: 'Enter \'id\'!' });
      return;
    }
    if (!title) {
      res.json({ ok: false, error: 'Enter \'title\'!' });
      return;
    }
    if (typeof id !== 'number') {
      res.json({ ok: false, error: '\'id\' must be of type number!' });
      return;
    }
    if (typeof title !== 'string') {
      res.json({ ok: false, error: '\'title\' must be of type string!' });
      return;
    }
    const found = await Specialization.findOne({
      where: {
        id,
      },
    });
    if (!found) {
      res.json({ ok: false, error: 'Specialization not found!' });
      return;
    }
    const result = await found.update({ id, title });
    res.json({ ok: true, result });
  } catch (e) {
    res.json({ ok: false, error: serverError });
  }
};

export default {
  addSpecialization,
  deleteSpecialization,
  editSpecialization,
  getAll,
};
