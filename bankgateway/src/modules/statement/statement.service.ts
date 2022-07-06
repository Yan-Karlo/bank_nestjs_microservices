import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateTransactionDTO } from './dtos/transaction.dto';
import { StatementFilterDTO } from './dtos/statementFilter';

@Injectable()
export class StatementService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002,
      },
    });
  }

  ping() {
    const response = this.client.send('ping', '-ping-');
    console.log(response);
    return response;
  }

  doTransaction(transaction: CreateTransactionDTO) {
    return this.client.send('doTransaction', transaction);
  }

  getStatement(filter: StatementFilterDTO) {
    return this.client.send('getStatement', filter);
  }
}
