import {Route, RouteConfigurator} from "arrow-express";
import {UserService} from "../user.service";
import {User} from "../user.entity";

export const GetAllUsersRoute = (usersService: UserService): RouteConfigurator => {
  return Route()
    .path('all')
    .method('get')
    .handler((res, req, context): Promise<User[]> => {
      return usersService.getAllUsers();
    });
};
