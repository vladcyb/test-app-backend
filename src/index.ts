import express from 'express';
import { specialization } from './controllers/specialization';

const app = express();

const PORT = 8000;

specialization.getAll();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => console.log('Server running'));
