import { Request, Response } from 'express';
import { Specialization } from '../../models/Specialization';
import { Master } from '../../models/Master';
import { AddMasterBodyType, EditMasterBodyType } from './types';
import { serverError } from '../../shared/constants';
import { FindOptions } from 'sequelize/types/lib/model';

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const { specId } = req.query;
    const options: FindOptions = {
      attributes: ['id', 'login', 'name', 'surname', 'patronymic'],
      // JOIN со специализацией
      include: {
        model: Specialization,
      },
      order: ['id'],
    };
    // если передан параметр specId, то вернуть мастеров только с этим specId
    if (specId) {
      options.where = { specId };
    }
    const result = await Master.findAll(options);
    res.json({ ok: true, result });
  } catch (e) {
    console.log(e);
    res.json({ ok: false });
  }
};

const deleteMaster = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await Master.destroy({
      where: {
        id: parseInt(id),
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
    // найти специализацию с id = specId
    const found = await Specialization.findOne({
      where: {
        id: specId,
      },
    });
    // Специализация найдена
    if (found) {
      const userExists = await Master.findOne({
        where: {
          login,
        },
      });
      // Вернуть ошибку, если логин уже занят
      if (userExists) {
        res.json({
          ok: false,
          error: 'This login is already taken!',
        });
        return;
      }
      const result = await Master.create(req.body);
      const { id } = result;
      // При успешном создании вернуть созданного мастера
      const foundNewMaster = await Master.findOne({
        attributes: ['id', 'login', 'name', 'surname', 'patronymic'],
        where: {
          id,
        },
        include: {
          model: Specialization,
        },
      });
      res.json({ ok: true, result: foundNewMaster });
      // Специализация не найдена
    } else {
      res.json({ ok: false, error: 'Specialization does not exist.' });
    }
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

const editMaster = async (req: Request, res: Response): Promise<void> => {
  const { id, login, name, patronymic, specId, surname } = req.body as EditMasterBodyType;
  if (!id) {
    res.json({ ok: false, error: 'Enter master \'id\'!' });
    return;
  }
  const found = await Master.findOne({
    where: { id },
  });
  if (found) {
    try {
      if (typeof specId === 'number') {
        const specialization = await Specialization.findOne({ where: { id: specId } });
        if (!specialization) {
          res.json({
            ok: false,
            error: 'Incorrect specialization id!',
          });
          return;
        }
      } else if (typeof specId !== 'undefined') {
        res.json({
          ok: false,
          error: '\'specId must be of numeric type!\'',
        });
        return;
      }
      if (typeof login !== 'undefined') {
        const foundWithGivenLogin = await Master.findOne({
          where: {
            login,
          },
        });
        if (foundWithGivenLogin && foundWithGivenLogin.id !== id) {
          res.json({ ok: false, error: 'This login is already taken.' });
        }
      }
      await found.update({ id, login, name, patronymic, specId, surname });
      const result = await Master.findOne({
        attributes: ['id', 'login', 'name', 'surname', 'patronymic'],
        include: {
          model: Specialization,
        },
        where: {
          id,
        },
      });
      res.json({
        ok: true,
        result,
      });
    } catch (e) {
      res.json({ ok: false, error: serverError });
    }
  } else {
    res.json({ ok: false, error: 'Master not found!' });
  }
};

export default {
  addMaster,
  deleteMaster,
  editMaster,
  getAll,
};
