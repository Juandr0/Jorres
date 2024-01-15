import Categories from '../constants/categories'

export interface Item {
    name: string;
    category: Categories;
    price: number;
    articleId: number;
}
