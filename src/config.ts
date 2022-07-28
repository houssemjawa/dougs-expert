import _ from 'lodash';
import constants from "./constants";

interface IConfig {
  PORT: number;
}

const config: IConfig = {
  PORT: _.parseInt(process.env.PORT) || constants.FALLBACK_PORT,
};

export default config;
