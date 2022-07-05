import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO, Customer } from './dtos/customer.dto';
import { LoginDTO } from './dtos/login.dto';

@Injectable()
export class AppService {
  ping(data: any) {
    return data;
  }

  createCustomer(customer: CreateCustomerDTO) {
    return 'Create a customer' + JSON.stringify(customer);
  }

  updateCustomer(customer: Customer) {
    return 'Update a customer' + JSON.stringify(customer);
  }

  findCustomerById(id: string) {
    return 'Finds a user ' + id;
  }

  deleteCustomer(id: string) {
    return 'Deletes a customer ' + id;
  }

  login(login: LoginDTO) {
    return 'Login done ' + JSON.stringify(login);
  }
}
