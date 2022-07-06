import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCustomerDTO, CustomerDTO, ResponseCustomerDTO } from './dtos/customer.dto';
import { LoginDTO } from './dtos/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('ping')
  ping(data: any) {
    return this.appService.ping(data);
  }

  @MessagePattern('createCustomer')
  createCustomer(customer: CreateCustomerDTO): Promise<ResponseCustomerDTO> {
    return this.appService.createCustomer(customer);
  }

  @MessagePattern('updateCustomer')
  updateCustomer(customer: CustomerDTO): Promise<ResponseCustomerDTO> {
    return this.appService.updateCustomer(customer);
  }

  @MessagePattern('findCustomerById')
  findCustomerById(id: string): Promise<ResponseCustomerDTO> {
    console.log('find custome by id microservice controller');
    return this.appService.findCustomerById(id);
  }

  @MessagePattern('deleteCustomer')
  deleteCustomer(id: string): Promise<ResponseCustomerDTO> {
    return this.appService.deleteCustomer(id);
  }

  @MessagePattern('login')
  login(login: LoginDTO) {
    return this.appService.login(login);
  }
}
