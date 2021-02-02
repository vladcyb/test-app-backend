import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('app', 'postgres', '123', {
  dialect: 'postgres',
  host: 'localhost',
});

export default sequelize;
