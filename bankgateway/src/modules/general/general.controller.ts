import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  CreateCustomerDTO,
  ResponseCustomerDTO,
} from 'src/modules/general/dtos/customer.dto';
import { LoginDTO } from 'src/modules/general/dtos/login.dto';
import { GeneralService } from './general.service';
import { ResponseLoginDTO } from './dtos/login.dto';
import { CustomerDTO } from './dtos/customer.dto';

@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('ping')
  ping() {
    return this.generalService.ping();
  }

  @Post('customers')
  createCustomer(
    @Body() customer: CreateCustomerDTO,
  ): Observable<ResponseCustomerDTO> {
    return this.generalService.createCustomer(customer);
  }

  @Put('customers')
  updateCustomer(@Body() customer: CustomerDTO): Observable<ResponseCustomerDTO> {
    return this.generalService.updateCustomer(customer);
  }

  @Get('customers/:id')
  findCustomerById(@Param('id') id: string): Observable<ResponseCustomerDTO> {
    console.log('gateway find customer by id');
    return this.generalService.findCustomerById(id);
  }

  @Delete('customers/:id')
  deleteCustomer(@Param('id') id: string): Observable<ResponseCustomerDTO> {
    return this.generalService.deleteCustomer(id);
  }

  @Get('login')
  login(@Body() login: LoginDTO): Observable<ResponseLoginDTO> {
    return this.generalService.login(login);
  }
}
