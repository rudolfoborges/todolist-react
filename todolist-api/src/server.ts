import express from 'express';
import routes from './config/routes';
import './config/database';

const server = express();
server.use(express.json());
server.use(routes);

server.listen(4000, () => {
  console.log('Server OK');
});
