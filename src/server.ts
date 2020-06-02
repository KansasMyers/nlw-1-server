import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({
    hello: "world"
  });
});

app.listen(3333, () => {
  console.log('API running on 3333');
});