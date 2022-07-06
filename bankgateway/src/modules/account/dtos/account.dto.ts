import { ApiProperty } from '@nestjs/swagger';
import { AccountType } from '../enums/accountType.enum';

export class CreateAccountDTO {
  @ApiProperty()
  costumerId: string;

  @ApiProperty({ description: 'An account can be either regular type or saving type' })
  accountType: AccountType;

  @ApiProperty()
  balance: number;
}

export class AccountDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  costumerId: string;

  @ApiProperty({ description: 'An account can be either regular type or saving type' })
  accountType: AccountType;

  @ApiProperty()
  balance: number;
}
