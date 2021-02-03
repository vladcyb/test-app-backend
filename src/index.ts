import express from 'express';
import sequelize from './sequelize';
import './models';
import routes from './routes';


const app = express();

app.use(express.json());
app.use(routes);

const PORT = 8000;
const connectAndStart = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, async () => console.log('Server running'));
  } catch (e) {
    if (e) console.log(e);
  }
};

connectAndStart();

