import express, {Application, Request, Response} from 'express';
import router from './routes';

const getServer = (): Application => {
  const app: Application = express();

  app.get('/', (req: Request, res: Response) => {
    res.json({
      'message': 'Hello World!',
      'data': null
    });
  });

  app.use('/api', router);

  return app;
};

export default getServer;