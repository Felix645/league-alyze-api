import 'dotenv/config';
import { Application } from 'express';
import getServer from './server';
import env from './utils/helpers';

const app: Application = getServer();
const port: number = env('PORT', 3000).int();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});