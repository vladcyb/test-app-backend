import sequelize from '../sequelize';
import { DataTypes, Model } from 'sequelize';


export class Master extends Model {
  id!: number;
  login!: string;
}

Master.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'Enter \'login!\'',
      },
    },
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Enter \'login!\'',
      },
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Enter \'login!\'',
      },
    },
  },
  patronymic: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Enter \'login!\'',
      },
    },
  },
}, {
  tableName: 'Master',
  sequelize,
});

