import { Master } from './Master';
import { Specialization } from './Specialization';

Master.belongsTo(Specialization, {
  foreignKey: {
    name: 'specId',
    allowNull: false,
  },
});

Master.hasOne(Specialization);

export * from './Specialization';
export * from './Master';
