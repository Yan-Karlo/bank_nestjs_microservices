import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

import { CreateCustomerDTO, Customer } from './dtos/customer.dto';
import { LoginDTO } from './dtos/login.dto';

@Injectable()
export class GeneralService {
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
    const response = this.client.send('ping', '-ping-from-general');
    return response;
  }

  createCustomer(customer: CreateCustomerDTO) {
    return this.client.send('createCustomer', customer);
  }

  updateCustomer(customer: Customer) {
    return this.client.send('updateCustomer', customer);
  }

  findCustomerById(id: string) {
    return this.client.send('findCustomerById', id);
  }

  deleteCustomer(id: string) {
    return this.client.send('deleteCustomer', id);
  }

  login(login: LoginDTO) {
    return this.client.send('login', login);
  }
}
