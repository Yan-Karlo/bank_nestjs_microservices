import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDTO, ResponseUserDTO, UserDTO } from 'dtos/user.dto';
import { LoginDTO } from 'dtos/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('ping')
  ping(data: any) {
    return this.appService.ping(data);
  }

  @MessagePattern('createUser')
  createUser(User: CreateUserDTO): Promise<ResponseUserDTO> {
    return this.appService.createUser(User);
  }

  @MessagePattern('updateUser')
  updateUser(User: UserDTO): Promise<ResponseUserDTO> {
    return this.appService.updateUser(User);
  }

  @MessagePattern('findUserById')
  findUserById(id: string): Promise<ResponseUserDTO> {
    console.log('find custome by id microservice controller');
    return this.appService.findUserById(id);
  }

  @MessagePattern('deleteUser')
  deleteUser(id: string): Promise<ResponseUserDTO> {
    return this.appService.deleteUser(id);
  }

  @MessagePattern('login')
  login(login: LoginDTO) {
    return this.appService.login(login);
  }
}
