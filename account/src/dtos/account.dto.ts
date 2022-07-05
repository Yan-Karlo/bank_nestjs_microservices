import { AccountType } from '../enums/accountType.enum';

export type CreateAccountDTO = {
  costumerId: string;
  accountType: AccountType;
  balance: number;
};

export type AccountDTO = {
  id: string;
  costumerId: string;
  accountType: AccountType;
  balance: number;
};
