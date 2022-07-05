import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDTO, CreateAccountDTO } from './dtos/account.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('ping')
  async ping() {
    return await this.accountService.ping();
  }

  @Post()
  createAccount(@Body() account: CreateAccountDTO) {
    return this.accountService.createAccount(account);
  }

  @Put()
  updateAccount(@Body() account: AccountDTO) {
    return this.accountService.updateAccount(account);
  }

  @Get(':id')
  findAccountById(@Param('id') id: string) {
    return this.accountService.findAccountById(id);
  }

  @Delete(':id')
  deleteAccount(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
