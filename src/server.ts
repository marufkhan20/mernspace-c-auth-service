import app from './app.js';
import { Config } from './config/index.js';
import logger from './config/logger.js';

const startServer = () => {
  const { PORT } = Config;
  try {
    app.listen(PORT, () => logger.info(`Listening on PORT`, { port: PORT }));
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();
