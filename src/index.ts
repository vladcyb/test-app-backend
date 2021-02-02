import express from 'express';
import { specialization } from './controllers/specialization';
import sequelize from './sequelize';

const app = express();

const PORT = 8000;

specialization.getAll();

app.use(express.json());
sequelize.sync();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, async () => console.log('Server running'));
