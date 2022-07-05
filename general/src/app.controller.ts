import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCustomerDTO, Customer } from './dtos/customer.dto';
import { LoginDTO } from './dtos/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('ping')
  ping(data: any) {
    return this.appService.ping(data);
  }

  @MessagePattern('createCustomer')
  createCustomer(customer: CreateCustomerDTO) {
    return this.appService.createCustomer(customer);
  }

  @MessagePattern('updateCustomer')
  updateCustomer(customer: Customer) {
    return this.appService.updateCustomer(customer);
  }

  @MessagePattern('findCustomerById')
  findCustomerById(id: string) {
    return this.appService.findCustomerById(id);
  }

  @MessagePattern('deleteCustomer')
  deleteCustomer(id: string) {
    return this.appService.deleteCustomer(id);
  }

  @MessagePattern('login')
  login(login: LoginDTO) {
    return this.appService.login(login);
  }
}
