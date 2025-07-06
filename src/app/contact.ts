import { category } from './category';

 export interface Contact {

    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    company: string;
    title: string;
    favorite: boolean;
    category: category;
 }