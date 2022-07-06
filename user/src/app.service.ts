import { Injectable } from '@nestjs/common';
import { LoginDTO, ResponseLoginDTO } from 'dtos/login.dto';
import { CreateUserDTO, ResponseUserDTO, UserDTO } from 'dtos/user.dto';

@Injectable()
export class AppService {
  ping(data: any) {
    return data;
  }

  async createUser(user: CreateUserDTO): Promise<ResponseUserDTO> {
    const newUser: ResponseUserDTO = {
      id: '1111',
      email: user.email,
      name: user.name,
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return newUser;
  }

  async updateUser(user: UserDTO): Promise<ResponseUserDTO> {
    const updatedUser: ResponseUserDTO = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return updatedUser;
  }

  async findUserById(id: string): Promise<ResponseUserDTO> {
    const newUser: ResponseUserDTO = {
      id: '1111',
      email: 'email@email.com',
      name: 'User.name',
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return newUser;
  }

  async deleteUser(id: string): Promise<ResponseUserDTO> {
    const deletedUser : ResponseUserDTO = {
      id: '1111',
      email: 'email@email.com',
      name: 'User.name',
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return deletedUser;
  }

  async login(login: LoginDTO): Promise<ResponseLoginDTO> {
    const response: ResponseLoginDTO = {
      token: '0981023980938098029802398032802',
    };
    return response;
  }
}
