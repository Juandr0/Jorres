import { Item } from '../interfaces/Item';
import { useAtom } from 'jotai';
import { ItemsListAtom } from './itemsManagerAtom';


export const useItems = () => {
    const [items, setItems] = useAtom(ItemsListAtom)

    const addItem = (item: Item) => {
        setItems([...items, item])
    }

    const updateItem = (item: Item) => {
        setItems((prevItems) => {
            const itemIndex = prevItems.findIndex((i) => i.articleId === item.articleId);
            if (itemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex] = item;
                return updatedItems;
            }
            return prevItems;
        });
    }

    const deleteItem = (item: Item) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((i) => i.articleId !== item.articleId);
            return updatedItems;
        });
    };


    return {
        items, addItem, updateItem, deleteItem,
    }
}