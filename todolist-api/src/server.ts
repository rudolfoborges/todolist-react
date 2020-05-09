import express from 'express';
import routes from './config/routes';

const server = express();
server.use(routes);

server.listen(4000, () => {
  console.log('Server OK');
});