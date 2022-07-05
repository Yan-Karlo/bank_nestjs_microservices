import { Controller } from '@nestjs/common';
import { StatementService } from './statement.service';

@Controller('statements')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}
}
