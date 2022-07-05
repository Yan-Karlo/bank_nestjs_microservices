import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { StatementModule } from './modules/statement/statement.module';

@Module({
  imports: [AccountModule, StatementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
