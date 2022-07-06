import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class ResponseLoginDTO {
  @ApiProperty()
  token: string;
}
