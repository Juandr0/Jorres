import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, UIManager, LayoutAnimation } from 'react-native';
import TodoItem from '../../../components/TodoItem';
import Layout from '../../../constants/Layout';
import Divider from '../../../components/Divider';
import { useAtom } from 'jotai';
import { ItemsManagerAtom } from '../../../hooks/itemsManagerAtom'; // Import the atom
import { Item } from '../../../interfaces/Item';

const Body: React.FC = ({ }) => {
    const [itemsManager] = useAtom(ItemsManagerAtom);
    const [items, setItems] = useState(itemsManager.getItems());

    useEffect(() => {
        const callback = (newItems: Item[]) => {
            setItems(newItems);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        };

        itemsManager.subscribe(callback);
    }, [itemsManager]);

    return (
        <View style={styles.body}>
            {items.length === 0 ? (
                <Text style={styles.addItemsText}>Add items by pressing the plus sign</Text>
            ) : (
                <FlatList
                    keyExtractor={(item) => item.articleId.toString()}
                    data={items}
                    renderItem={({ item }) => (
                        <TodoItem item={item} itemManager={itemsManager} />
                    )}
                    contentContainerStyle={{ paddingBottom: 10 }}
                />
            )}
            <Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        maxHeight: Layout.window.height * 0.7,
        minHeight: Layout.window.height * 0.7,
    },
    addItemsText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    }
});

export default Body;
