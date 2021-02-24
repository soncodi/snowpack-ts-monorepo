import express from 'express';
import { data } from '@soncodi/common';
import cfg from '../config.json';

console.log('start server', data);

const app = express();

app.get('/', (req, res) => {
  console.log('GET', req.path, Date.now());

  return res.json({
    ts:  Date.now(),
    lib: data
  });
});

app.listen(cfg.serverPort, () => {
  console.log(`server up on ${cfg.serverPort}`);
});
