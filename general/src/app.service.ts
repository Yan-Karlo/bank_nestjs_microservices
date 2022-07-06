import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO, ResponseCustomerDTO } from './dtos/customer.dto';
import { LoginDTO, ResponseLoginDTO } from './dtos/login.dto';
import { CustomerDTO } from '../../bankgateway/src/modules/general/dtos/customer.dto';

@Injectable()
export class AppService {
  ping(data: any) {
    return data;
  }

  async createCustomer(customer: CreateCustomerDTO): Promise<ResponseCustomerDTO> {
    const newCustomer: ResponseCustomerDTO = {
      id: '1111',
      email: customer.email,
      name: customer.name,
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return newCustomer;
  }

  async updateCustomer(customer: CustomerDTO): Promise<ResponseCustomerDTO> {
    const updatedCustomer: ResponseCustomerDTO = {
      id: customer.id,
      email: customer.email,
      name: customer.name,
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return updatedCustomer;
  }

  async findCustomerById(id: string): Promise<ResponseCustomerDTO> {
    const newCustomer: ResponseCustomerDTO = {
      id: '1111',
      email: 'email@email.com',
      name: 'customer.name',
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return newCustomer;
  }

  async deleteCustomer(id: string): Promise<ResponseCustomerDTO> {
    const deletedCustomer : ResponseCustomerDTO = {
      id: '1111',
      email: 'email@email.com',
      name: 'customer.name',
      createdAt: new Date(),
      updatedAT: new Date(),
    };
    return deletedCustomer;
  }

  async login(login: LoginDTO): Promise<ResponseLoginDTO> {
    const response: ResponseLoginDTO = {
      token: '0981023980938098029802398032802',
    };
    return response;
  }
  async dummy() {
    return 'dummy';
   }
}
