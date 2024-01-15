


/*

const useItemManager = () => {

    const [items, setItems] = useState<Item[]>([]);
    // CRUD

    addItem(newItem: Item) {
        setItems([...items, newItem]);
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


    return {
        getIndex,
        deleteItem,
        updateItem,
        addItem,
        items
    }
}

*/