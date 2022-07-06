import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { AccountDTO, CreateAccountDTO } from './dtos/account.dto';
import { IndexAccountSwagger } from './swagger/index-account.swagger';
import { Observable } from 'rxjs';

@Controller('accounts')
@ApiTags('Accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('ping')
  @ApiOperation({ summary: 'It is a dummy enpoint just for connection tests' })
  @ApiResponse({ status: 200, description: 'Returns a dummy pong word' })
  ping(): Observable<string> {
    return this.accountService.ping();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Gets information of a bank account by its ID' })
  @ApiResponse({
    status: 200,
    description: 'The update was done successfully',
    type: IndexAccountSwagger,
  })
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'Bank account not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAccountById(@Param('id') id: string): Observable<AccountDTO> {
    return this.accountService.findAccountById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Creates a bank account' })
  @ApiResponse({
    status: 201,
    description: 'The bank account was created',
    type: IndexAccountSwagger,
  })
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  createAccount(@Body() account: CreateAccountDTO): Observable<AccountDTO> {
    return this.accountService.createAccount(account);
  }

  @Put()
  @ApiOperation({ summary: 'Updates a bank account' })
  @ApiResponse({
    status: 200,
    description: 'The update was done successfully',
    type: IndexAccountSwagger,
  })
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'Bank account not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  updateAccount(@Body() account: AccountDTO): Observable<AccountDTO> {
    return this.accountService.updateAccount(account);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a bank account' })
  @ApiResponse({
    status: 204,
    description: 'The deletion was done successfully',
  })
  @ApiResponse({ status: 400, description: 'Invalid parameters' })
  @ApiResponse({ status: 404, description: 'Bank account not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  deleteAccount(@Param('id') id: string): Observable<AccountDTO> {
    return this.accountService.deleteAccount(id);
  }
}
