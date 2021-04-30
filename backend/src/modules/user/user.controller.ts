import { Controller, ControllerConfiguration } from 'arrow-express';

import { UserService } from './user.service';
import {GetAllUsersRoute} from "./routes/getAll.route";

export function UserController(userService: UserService): ControllerConfiguration {
  return Controller()
    .prefix('users')
    .registerRoutes(
      GetAllUsersRoute(userService)
    );
}
