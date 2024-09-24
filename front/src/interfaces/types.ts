export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IErrorProps {
  email?: string;
  password?: string;
}

export interface IRegisterProps {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

export interface IRegisterErrors {
  email?: string;
  password?: string;
  name?: string;
  address?: string;
  phone?: string;
}

export interface IUserSession {
  token: string;
  user: {
    address: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    role: string;
    orders: []
  };
}

export interface IOrder {
  id: number;
  status: string;
  date: Date;
  products: IProduct[];
}

