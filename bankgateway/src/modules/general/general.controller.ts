
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCustomerDTO, Customer } from 'src/modules/general/dtos/customer.dto';
import { LoginDTO } from 'src/modules/general/dtos/login.dto';
import { GeneralService } from './general.service';

@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('ping')
  ping() {
    return this.generalService.ping();
  }

  @Post('customers')
  createCustomer(@Body() customer: CreateCustomerDTO) {
    return this.generalService.createCustomer(customer);
  }

  @Put('customers')
  updateCustomer(@Body() customer: Customer) {
    return this.generalService.updateCustomer(customer);
  }

  @Get('customers/:id')
  findCustomerById(@Param('id') id: string) {
    return this.generalService.findCustomerById(id);
  }

  @Delete('customers/:id')
  deleteCustomer(@Param('id') id: string) {
    return this.generalService.deleteCustomer(id);
  }

  @Get('login')
  login(@Body() login: LoginDTO) {
    return this.generalService.login(login);
  }
}
