import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, ViewStyle } from 'react-native';
import TodoItem from '../../../components/TodoItem';
import Categories from '../../../constants/categories';
import Layout from '../../../constants/Layout';

export default function Body({ }) {
    const [items, setItems] = useState([
        { name: 'Köttfärs', category: Categories.Food, price: 49, key: 1 },
        { name: 'Ben & Jerrys', category: Categories.Snacks, price: 55, key: 2 },
        { name: 'Blommor', category: Categories.Other, price: 149, key: 3 },
        { name: 'Chips', category: Categories.Snacks, price: 49, key: 4 },
        { name: 'Lax', price: 129, category: Categories.Food, key: 5 },
        { name: 'Blommor', category: Categories.Other, price: 149, key: 6 },
        { name: 'Chips', category: Categories.Snacks, price: 49, key: 7 },
        { name: 'Lax', price: 129, category: Categories.Food, key: 8 },
        { name: 'Blommor', category: Categories.Other, price: 149, key: 9 },
        { name: 'Chips', category: Categories.Snacks, price: 49, key: 10 },
        { name: 'Lax', price: 129, category: Categories.Food, key: 11 },
    ])

    return (
        <View style={styles.body}>
            {items.length === 0 ? (
                <Text>Add items by pressing the plus sign</Text>
            ) : (
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <TodoItem item={item} />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        maxHeight: Layout.window.height * 0.67
    },
    defaultText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
})

