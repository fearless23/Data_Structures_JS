import { test } from './src';
import pino from 'pino';

export const handler = async (event) => {
  const logger = pino();
  return test(logger, event);
};
