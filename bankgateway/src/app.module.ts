import { Module } from '@nestjs/common';
import { AccountModule } from './modules/account/account.module';
import { StatementModule } from './modules/statement/statement.module';
import { GeneralModule } from './modules/general/general.module';

@Module({
  imports: [AccountModule, StatementModule, GeneralModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
