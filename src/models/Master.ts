import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
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
    primaryKey: true,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patronymic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Master',
  sequelize,
});

Master.belongsTo(Specialization);
