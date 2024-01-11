import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import Layout from '../constants/Layout'
import Categories from '../constants/categories';
import Colors from '../constants/AppColors';

interface TodoItemProps {
    item: {
        name: string;
        category: Categories;
        price: number;
        articleId: number;
    }
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={[styles.text,]}>{item.name}</Text>
            <Text style={[styles.text, { textAlign: 'center' }]}>{Categories[item.category]}</Text>
            <Text style={[styles.text, { textAlign: 'right' }]}>{item.price}:-</Text>
            <Text style={[styles.text, { textAlign: 'right' }]}>{item.articleId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: Layout.window.width * 0.95,
        backgroundColor: Colors.themeColors.backgroundSecondary,

        marginTop: 10,
        marginHorizontal: 10,

        paddingVertical: 15,
        paddingHorizontal: 10,

        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.themeColors.backgroundTertiary,

    },
    text: {
        flex: 1,
        color: 'white',
        fontSize: 16,
    },

})

export default TodoItem;