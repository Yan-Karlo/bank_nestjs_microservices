import { Injectable } from '@nestjs/common';
import { AccountDTO, CreateAccountDTO } from './dtos/account.dto';
import { AccountType } from './enums/accountType.enum';

@Injectable()
export class AppService {
  ping(data: any): string {
    console.log('pong in accounts');
    return data;
  }

  createAccount(account: CreateAccountDTO): AccountDTO {
    const newAccount: AccountDTO = {
      id: '1111',
      costumerId: account.costumerId,
      accountType: account.accountType,
      balance: account.balance,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return newAccount;
  }

  updateAccount(account: AccountDTO): AccountDTO {
    const newAccount: AccountDTO = {
      id: account.id,
      costumerId: account.costumerId,
      accountType: account.accountType,
      balance: account.balance,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return newAccount;
  }

  findAccountById(id: string): AccountDTO {
    const foundAccount: AccountDTO = {
      id: '1111',
      costumerId: 'account.costumerId',
      accountType: AccountType.Regular,
      balance: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return foundAccount;
  }

  deleteAccount(id: string): AccountDTO {
    const deleteddAccount: AccountDTO = {
      id: '1111',
      costumerId: 'account.costumerId',
      accountType: AccountType.Regular,
      balance: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return deleteddAccount;
  }
}
