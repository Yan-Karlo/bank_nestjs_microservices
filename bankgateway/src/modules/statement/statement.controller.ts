import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransactionDTO } from './dtos/transaction.dto';
import { StatementService } from './statement.service';
import { StatementFilterDTO } from './dtos/statementFilter';

@Controller('statements')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}

  @Get('ping')
  ping() {
    return this.statementService.ping();
  }

  @Post()
  doTransaction(@Body() createdTRansaction: CreateTransactionDTO) {
    return this.statementService.doTransaction(createdTRansaction);
  }

  @Get()
  getStatement(@Body() filter: StatementFilterDTO) {
    console.log('getStatement controller');
    return this.statementService.getStatement(filter);
  }
}
