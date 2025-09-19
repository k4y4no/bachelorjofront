export interface User {
    id: number;
    name: string;
    firstname: string;
    email: string;
    phone: string;
    password: string;
}

export interface UserPublic {
    id: number;
    name: string;
    firstname: string;
    email: string;
    phone: string;
}


export interface UserCreate {
    name: string;
    firstname: string;
    email: string;
    phone: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}