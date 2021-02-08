import express from 'express';
import cors from 'cors';
import sequelize from './sequelize';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 8000;
const connectAndStart = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log('Server running'));
  } catch (e) {
    if (e) console.log(e);
  }
};

connectAndStart();

