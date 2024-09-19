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