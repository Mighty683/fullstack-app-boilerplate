// Express modules
import Express from 'express';
import Compression from 'compression';
import BodyParser from 'body-parser';
import cors from 'cors';

// Api modules
import { Application } from 'arrow-express';

// Data modules
import {initDataAccessConnection} from "./ormconfig";
import {UserService} from "./modules/user/user.service";
import {UserController} from "./modules/user/user.controller";
import {User} from "./modules/user/user.entity";



async function startServer() {
  // Bootstraping express application
  const expressApplication = Express();
  expressApplication.use(cors());
  expressApplication.use(Compression());
  expressApplication.use(BodyParser());


  // Bootstraping database connection
  const connection = await initDataAccessConnection();

  // Initialization of services
  const userService = new UserService(connection.getRepository(User));

  Application({
    port: Number(process.env.PORT),
    app: expressApplication
  }).registerControllers(
    UserController(userService)
  ).start();
}

startServer();