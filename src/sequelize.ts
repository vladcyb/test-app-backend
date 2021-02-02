import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('app', 'postgres', '123', {
  dialect: 'postgres',
  host: 'localhost',
});

const initialize = async () => {
  try {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.createTable('Specialization', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('Master', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      login: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      surname: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      patronymic: {
        type: DataTypes.STRING,
      },
      spec_id: {
        type: DataTypes.INTEGER,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

initialize();

export default sequelize;

