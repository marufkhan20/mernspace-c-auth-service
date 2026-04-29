import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome To Auth Service');
});

export default app;
