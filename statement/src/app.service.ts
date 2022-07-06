import { Injectable } from '@nestjs/common';
import { TransactionType } from './enums/transactionType.enum';
import { StatementFilter } from './dtos/statementFilter';
import { CreateTransactionDTO } from './dtos/transaction.dto';

@Injectable()
export class AppService {
  ping(data: any) {
    return data;
  }

  doTransaction(transaction: CreateTransactionDTO) {
    const isDeposit = transaction.amount > 0 && transaction.sourceAccountId.length === 0;
    const isWithdraw = transaction.amount < 0 && transaction.sourceAccountId.length === 0;
    const isTransfer = transaction.amount > 0 && transaction.sourceAccountId.length > 0;

    const transactionType = isDeposit
      ? TransactionType.Deposit
      : isWithdraw
      ? TransactionType.Withdraw
      : TransactionType.Transfer;

    const statement: any = { ...transaction, transactionType };
    return `Transaction done: origin: ${JSON.stringify(statement)}`;
  }

  getStatement(filter: StatementFilter) {
    return 'Get statement' + JSON.stringify(filter);
  }
}
