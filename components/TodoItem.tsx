import React, { useRef } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, PanResponder, Animated } from 'react-native';
import Layout from '../constants/Layout'
import Categories from '../constants/categories';
import Colors from '../constants/AppColors';
import ItemsManager from '../classes/ItemsManager';


interface TodoItemProps {
    item: {
        name: string;
        category: Categories;
        price: number;
        articleId: number;
    }
    itemManager: ItemsManager
}

const TodoItem: React.FC<TodoItemProps> = ({ item, itemManager }) => {
    const screenWidth = Layout.window.width;
    const pan = useRef(new Animated.ValueXY()).current;

    const deleteAnimation = Animated.timing(pan, {
        toValue: { x: -screenWidth, y: 0 },
        duration: 300,
        useNativeDriver: false,
    });

    const resetAnimation = Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
    });

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x }]),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -50) {
                    deleteAnimation.start(() => {
                        itemManager.deleteItem(item);
                    })
                } else {
                    resetAnimation.start();
                }

            },
        }),
    ).current;

    return (
        <Animated.View style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }} {...panResponder.panHandlers} >
            <View style={styles.item}>
                <Text style={[styles.text,]}>{item.name}</Text>
                <Text style={[styles.text, { textAlign: 'center' }]}>{Categories[item.category]}</Text>
                <Text style={[styles.text, { textAlign: 'right' }]}>{item.price}:-</Text>
                <Text style={[styles.text, { textAlign: 'right' }]}>{item.articleId}</Text>
            </View>
        </Animated.View >
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
        paddingHorizontal: 15,

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