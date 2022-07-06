export class UserDTO {
  id: string;
  email: string;
  name: string;
}

export class ResponseUserDTO {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAT: Date;
}

export class CreateUserDTO {
  email: string;
  name: string;
}
