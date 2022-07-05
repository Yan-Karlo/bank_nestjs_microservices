import { Module } from '@nestjs/common';
import { AccountModule } from './modules/account/account.module';
import { StatementModule } from './modules/statement/statement.module';

@Module({
  imports: [AccountModule, StatementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
