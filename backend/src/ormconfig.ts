import path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {Connection, createConnection} from "typeorm";

function getConnectionOptions(): PostgresConnectionOptions {
  const options: PostgresConnectionOptions = {
    type: "postgres",
    migrationsRun: true,
    entities: [
      path.join(__dirname, '/**/**.entity.ts')
    ],
    migrations: [
      path.join(__dirname, 'data', 'migrations', '*.ts')
    ],
  };
  if (process.env.DATABASE_URL) {
    return {
      ...options,
      url: process.env.DATABASE_URL,
    };
  } else {
    return {
      ...options,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
    };
  }
}

export function initDataAccessConnection (): Promise<Connection> {
  return createConnection(getConnectionOptions());
}