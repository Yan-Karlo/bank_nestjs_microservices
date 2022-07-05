import { Injectable } from '@nestjs/common';
import { AccountDTO, CreateAccountDTO } from './dtos/account.dto';

@Injectable()
export class AppService {
  ping(data: any) {
    console.log('pong in accounts');
    return data;
  }

  createAccount(account: CreateAccountDTO) {
    return 'Create the Account' + JSON.stringify(account);
  }

  updateAccount(account: AccountDTO) {
    return 'Update the Account' + JSON.stringify(account);
  }

  findAccountById(id: string) {
    return 'Finds the user ' + id;
  }

  deleteAccount(id: string) {
    return 'Deletes the Account ' + id;
  }
}
