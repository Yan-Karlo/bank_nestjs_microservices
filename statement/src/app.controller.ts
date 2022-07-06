import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { StatementFilter } from './dtos/statementFilter';

@Controller('transactions')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('ping')
  ping(data: any) {
    return this.appService.ping(data);
  }

  @MessagePattern('doTransaction')
  doTransaction(data: any) {
    return this.appService.doTransaction(data);
  }

  @MessagePattern('getStatement')
  getStatement(filter: StatementFilter) {
    return this.appService.getStatement(filter);
  }
}
