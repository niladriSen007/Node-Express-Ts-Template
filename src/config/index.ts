
import dotenv from 'dotenv';
import { ServerConfig } from './types.js';

function loadDotEnv() {
  const env = dotenv.config();
  if (env.error) {
    throw env.error;
  }
  return "Environment variables loaded successfully";
}
loadDotEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 4000,
}