import { Item } from '../interfaces/Item';
import Categories from '../constants/categories';

class ItemsManager {
    private items: Item[];
    private subscribers: ((items: Item[]) => void)[] = [];

    constructor() {
        this.items = [
            { name: 'Köttfärs', category: Categories.Food, price: 49, articleId: 1 },
            { name: 'Ben & Jerrys', category: Categories.Snacks, price: 55, articleId: 2 },
            { name: 'Blommor', category: Categories.Other, price: 149, articleId: 3 },
            { name: 'Chips', category: Categories.Snacks, price: 49, articleId: 4 },
            { name: 'Lax', price: 129, category: Categories.Food, articleId: 5 },
        ];
    }

    // CRUD

    addItem(newItem: Item) {
        this.items = [...this.items, newItem];
        this.notifySubscribers();
    }

    getItems() {
        return this.items;
    }

    updateItem(updatedItem: Item) {
        const index = this.getIndex(updatedItem);
        if (index !== -1) {
            this.items[index] = updatedItem
            this.notifySubscribers();
        }
    }

    deleteItem(item: Item) {
        const index = this.getIndex(item);
        if (index !== -1) {
            const updatedItems = [...this.items];
            updatedItems.splice(index, 1);
            this.items = updatedItems;
            this.notifySubscribers();
        }
    }

    // Helper functions.

    getIndex(item: Item) {
        return this.items.findIndex((i) => i === item)
    }


    subscribe(callback: (items: Item[]) => void) {
        this.subscribers.push(callback);
    }

    private notifySubscribers() {
        for (const subscriber of this.subscribers) {
            subscriber(this.items);
        }
    }
}

export default ItemsManager;
