import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';


export class Specialization extends Model {
  public id!: number;
  public title?: string;
}

Specialization.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
  },
}, {
  tableName: 'Specialization',
  sequelize,
});
