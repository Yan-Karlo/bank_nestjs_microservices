import { AccountType } from '../enums/accountType.enum';

export class CreateAccountDTO {
  costumerId: string;
  accountType: AccountType;
  balance: number;
}

export class AccountDTO {
  id: string;
  costumerId: string;
  accountType: AccountType;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}
