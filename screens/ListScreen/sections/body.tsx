import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, UIManager, LayoutAnimation } from 'react-native';
import TodoItem from '../../../components/TodoItem';
import Layout from '../../../constants/Layout';
import Divider from '../../../components/Divider';
import ItemsManager from '../../../classes/ItemsManager';
import { Item } from '../../../interfaces/Item';

// Enable layout animations for Android
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

interface BodyProps {
    itemsManager: ItemsManager;
}

const Body: React.FC<BodyProps> = ({ itemsManager }) => {
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
                <Text>Add items by pressing the plus sign</Text>
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
        maxHeight: Layout.window.height * 0.67,
    },
});

export default Body;
