export type TShippingAddress = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type TUser = {
  name: string;
  email: string;
  avatar: string;
  password: string;
  shippingAddress: TShippingAddress[];
  phone: string;
  role: "admin" | "user";
  address: string;
  isDeleted: boolean;
  __v?: null;
  createdAt?: string;
  updatedAt?: string;
};
