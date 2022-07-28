import logger from 'jet-logger';
import constants from './constants';
import config from './config';
import server from './server';

// Start server
server.listen(config.PORT, () => {
    logger.info(constants.SERVER_START_MSG + config.PORT);
});

export default server;