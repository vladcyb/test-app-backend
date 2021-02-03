import sequelize from '../sequelize';
import { DataTypes, Model } from 'sequelize';


export class Specialization extends Model {
  public id!: number;
  public title!: string;
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
    allowNull: false,
  },
}, {
  tableName: 'Specialization',
  sequelize,
});
