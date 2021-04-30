import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

import { User } from './user.entity';


export class UserService {
    userRepository: Repository<User>
    constructor (userRepository: Repository<User>) {
      this.userRepository = userRepository;
    }

    getUserById(id: number): Promise<User> {
      return this.userRepository.findOne(id);
    }

    getAllUsers(): Promise<User[]> {
      return this.userRepository.find();
    }

    async verifyUserPassword(user: User, password: string): Promise<boolean> {
      const { password_hash } = await this.userRepository.findOne({
        where: {
          id: user.id,
        },
        select: ['password_hash']
      });
      return bcrypt.compare(password, password_hash);
    }
}