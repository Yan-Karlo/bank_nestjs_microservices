import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LoginDTO, ResponseLoginDTO } from './dtos/login.dto';
import { CreateUserDTO, ResponseUserDTO, UserDTO } from './dtos/User.dto';

@Injectable()
export class UserService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3003,
      },
    });
  }

  ping() {
    const response = this.client.send('ping', '-ping-from-users');
    return response;
  }

  createUser(User: CreateUserDTO): Observable<ResponseUserDTO> {
    return this.client.send('createUser', User);
  }

  updateUser(User: UserDTO): Observable<ResponseUserDTO> {
    return this.client.send('updateUser', User);
  }

  findUserById(id: string): Observable<ResponseUserDTO> {
    return this.client.send('findUserById', id);
  }

  deleteUser(id: string): Observable<ResponseUserDTO> {
    return this.client.send('deleteUser', id);
  }

  login(login: LoginDTO): Observable<ResponseLoginDTO> {
    return this.client.send('login', login);
  }
}
