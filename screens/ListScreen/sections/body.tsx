import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, ViewStyle } from 'react-native';
import TodoItem from '../../../components/TodoItem';
import Categories from '../../../constants/categories';
import Layout from '../../../constants/Layout';
import Divider from '../../../components/Divider';

export default function Body({ }) {
    const [items, setItems] = useState([
        { name: 'Köttfärs', category: Categories.Food, price: 49, articleId: 1 },
        { name: 'Ben & Jerrys', category: Categories.Snacks, price: 55, articleId: 2 },
        { name: 'Blommor', category: Categories.Other, price: 149, articleId: 3 },
        { name: 'Chips', category: Categories.Snacks, price: 49, articleId: 4 },
        { name: 'Lax', price: 129, category: Categories.Food, articleId: 5 },
    ])

    return (

        <View style={styles.body}>
            {items.length === 0 ? (
                <Text>Add items by pressing the plus sign</Text>
            ) : (
                <FlatList
                    keyExtractor={(item) => item.articleId.toString()}
                    data={items}
                    renderItem={({ item }) => (
                        <TodoItem item={item} />
                    )}
                    contentContainerStyle={{ paddingBottom: 10 }}
                />
            )}
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        maxHeight: Layout.window.height * 0.67
    },
    defaultText: {
        fontSize: 18,
        textAlign: 'center',
    },
})

