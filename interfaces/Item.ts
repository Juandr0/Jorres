import { Categories } from '../constants/Categories'

export interface Item {
    name: string;
    category: Categories;
    price: number;
    articleId: number;
}
