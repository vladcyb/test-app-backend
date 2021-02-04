import { Request, Response } from 'express';
import { Specialization } from '../../models/Specialization';
import { Master } from '../../models/Master';
import { AddMasterBodyType, DeleteMasterBodyType } from './types';


const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Master.findAll({
      attributes: ['login', 'name', 'surname', 'patronymic'],
      include: {
        model: Specialization,
      },
    });
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
  const { specId, login } = req.body as AddMasterBodyType;
  try {
    if (!specId) {
      res.json({
        ok: false,
        error: 'Enter \'specId\'!',
      });
      return;
    }
    const found = await Specialization.findOne({
      where: {
        id: specId,
      },
    });
    if (found) {
      const userExists = await Master.findOne({
        where: {
          login,
        },
      });
      if (userExists) {
        res.json({
          ok: false,
          error: 'Login is already taken!',
        });
        return;
      }
      await Master.create(req.body);
      res.json({ ok: true });
    } else {
      res.json({ ok: false, error: 'Specialization does not exist.' });
    }
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

export default {
  addMaster,
  deleteMaster,
  getAll,
};
