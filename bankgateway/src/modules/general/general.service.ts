import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

import {
  CreateCustomerDTO,
  ResponseCustomerDTO,
  CustomerDTO,
} from './dtos/customer.dto';
import { LoginDTO, ResponseLoginDTO } from './dtos/login.dto';

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

  createCustomer(customer: CreateCustomerDTO): Observable<ResponseCustomerDTO> {
    return this.client.send('createCustomer', customer);
  }

  updateCustomer(customer: CustomerDTO): Observable<ResponseCustomerDTO> {
    return this.client.send('updateCustomer', customer);
  }

  findCustomerById(id: string): Observable<ResponseCustomerDTO> {
    return this.client.send('findCustomerById', id);
  }

  deleteCustomer(id: string): Observable<ResponseCustomerDTO> {
    return this.client.send('deleteCustomer', id);
  }

  login(login: LoginDTO): Observable<ResponseLoginDTO> {
    return this.client.send('login', login);
  }
}
