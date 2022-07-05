export type Customer = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type CreateCustomerDTO = {
  email: string;
  firstName: string;
  lastName: string;
};
