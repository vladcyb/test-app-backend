import sequelize from '../sequelize';
import { DataTypes, Model } from 'sequelize';
import { Specialization } from './Specialization';


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
        msg: 'Enter \'surname!\'',
      },
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Enter \'name!\'',
      },
    },
  },
  patronymic: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Enter \'patronymic!\'',
      },
    },
  },
}, {
  tableName: 'Master',
  sequelize,
  timestamps: false,
});

Master.belongsTo(Specialization, {
  foreignKey: {
    name: 'specId',
    allowNull: false,
  },
});
