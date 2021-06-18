import { Router } from 'express';

import userRouter from './user';
import authRouter from './auth';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);

routes.get('/', (_, res) =>
  res.status(200).json({
    message: 'hello world !',
  }),
);

export default routes;
