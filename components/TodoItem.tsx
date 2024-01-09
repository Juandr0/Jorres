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
        key: number;
    }
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={[styles.text, { justifyContent: 'flex-start', textAlign: 'left' }]}>{item.name}</Text>
            <Text style={[styles.text, { justifyContent: 'center', textAlign: 'center' }]}>{Categories[item.category]}</Text>
            <Text style={[styles.text, { justifyContent: 'flex-end', textAlign: 'right' }]}>{item.price}:-</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
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
        fontSize: 16
    },

})

export default TodoItem;