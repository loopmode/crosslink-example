import './common/env';
import Server from './common/server';
import routes from './routes';

import { hello } from '@common/utils'

console.log('>> common/utils in server:', hello());

export default new Server()
  .router(routes)
  .listen(process.env.PORT);
