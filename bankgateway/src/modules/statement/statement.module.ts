import { Module } from '@nestjs/common';
import { StatementService } from './statement.service';
import { StatementController } from './statement.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STATEMENT_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [StatementController],
  providers: [StatementService],
})
export class StatementModule {}
