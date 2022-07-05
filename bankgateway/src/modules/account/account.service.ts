import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { AccountDTO, CreateAccountDTO } from './dtos/account.dto';

@Injectable()
export class AccountService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    });
  }

  ping() {
    const response = this.client.send('ping', '-ping-');
    return response;
  }

  createAccount(account: CreateAccountDTO) {
    return this.client.send('createAccount', account);
  }

  updateAccount(account: AccountDTO) {
    return this.client.send('updateAccount', account);
  }

  findAccountById(id: string) {
    return this.client.send('findAccountById', id);
  }

  deleteAccount(id: string) {
    return this.client.send('deleteAccount', id);
  }

}
