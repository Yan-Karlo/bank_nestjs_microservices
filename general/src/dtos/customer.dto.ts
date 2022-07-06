export class CustomerDTO {
  id: string;
  email: string;
  name: string;
}

export class ResponseCustomerDTO {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAT: Date;
}

export class CreateCustomerDTO {
  email: string;
  name: string;
}
