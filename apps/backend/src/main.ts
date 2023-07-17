import express from 'express';
import { currentDate } from '@myorg/functions';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/customer', (req, res) => {
  res.send(`[ customer ] ${currentDate()}`);
});

app.get('/admin', (req, res) => {
  res.send(`[ admin ] ${currentDate()}`);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
