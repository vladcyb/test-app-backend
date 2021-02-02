import express from 'express';
import sequelize from './sequelize';
import './models';


const app = express();

const PORT = 8000;

app.use(express.json());
const connectAndStart = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, async () => console.log('Server running'));
  } catch (e) {
    if (e) console.log(e);
  }
};

connectAndStart();

app.get('/', (req, res) => {
  res.send('Hello world');
});

