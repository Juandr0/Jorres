import React, { useRef } from 'react';
import { useNavigation, NavigationContainerRef } from '@react-navigation/native';
import { Text, View, StyleSheet, PanResponder, Animated } from 'react-native';
import { StackScreens } from '../navigation/screenTypes';
import { useAtom } from 'jotai';

import Layout from '../constants/Layout'
import Categories from '../constants/categories';
import Colors from '../constants/AppColors';
import { ItemsManagerAtom } from '../hooks/itemsManagerAtom';
import { Item } from '../interfaces/Item';

interface TodoItemProps {
    item: {
        name: string;
        category: Categories;
        price: number;
        articleId: number;
    }
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
    const [itemsManager] = useAtom(ItemsManagerAtom);
    const navigation = useNavigation<NavigationContainerRef<StackScreens>>();
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
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_, gestureState) => {
                const xAxisActionThreshold = 50;

                // If left-swipe further than xAxisActionThreshold
                if (gestureState.dx < -xAxisActionThreshold) {
                    deleteAnimation.start(() => {
                        itemsManager.deleteItem(item);
                    })
                }
                // If right-swipe further than xAxisActionThreshold
                if (gestureState.dx > xAxisActionThreshold) {
                    resetAnimation.start();
                    navigation.navigate('AddScreen', { itemToEdit: item }); // pass item to addscreeen
                }
                resetAnimation.start();
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