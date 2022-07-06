import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
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

  ping(): Observable<string> {
    const response = this.client.send('ping', '-ping-');
    return response;
  }

  createAccount(account: CreateAccountDTO): Observable<AccountDTO> {
    return this.client.send('createAccount', account);
  }

  updateAccount(account: AccountDTO): Observable<AccountDTO> {
    return this.client.send('updateAccount', account);
  }

  findAccountById(id: string): Observable<AccountDTO> {
    return this.client.send('findAccountById', id);
  }

  deleteAccount(id: string): Observable<AccountDTO> {
    return this.client.send('deleteAccount', id);
  }
}
