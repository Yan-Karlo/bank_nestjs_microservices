import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AccountDTO, CreateAccountDTO } from './dtos/account.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('ping')
  ping(data: any): string {
    console.log('Account was ping');
    return this.appService.ping(data);
  }

  @MessagePattern('createAccount')
  createAccount(account: CreateAccountDTO): AccountDTO {
    return this.appService.createAccount(account);
  }

  @MessagePattern('updateAccount')
  updateAccount(account: AccountDTO): AccountDTO {
    return this.appService.updateAccount(account);
  }

  @MessagePattern('findAccountById')
  findAccountById(id: string): AccountDTO {
    return this.appService.findAccountById(id);
  }

  @MessagePattern('deleteAccount')
  deleteAccount(id: string): AccountDTO {
    return this.appService.deleteAccount(id);
  }
}
