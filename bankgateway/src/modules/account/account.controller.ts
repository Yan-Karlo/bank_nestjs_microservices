import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('ping')
  async ping() {
    return await this.accountService.ping();
  }
}
