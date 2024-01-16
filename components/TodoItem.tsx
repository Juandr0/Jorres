import React, { useRef } from 'react';
import { useNavigation, NavigationContainerRef } from '@react-navigation/native';
import { Text, StyleSheet, PanResponder, Animated } from 'react-native';
import { StackScreens } from '../navigation/screenTypes';
import Layout from '../constants/Layout'
import Colors from '../constants/AppColors';
import { useItems } from '../hooks/UseItems';
import { Categories } from '../constants/Categories';

interface TodoItemProps {
    item: {
        name: string;
        category: Categories;
        price: number;
        articleId: number;
    }
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
    const { deleteItem } = useItems();
    const navigation = useNavigation<NavigationContainerRef<StackScreens>>();
    const screenWidth = Layout.window.width;
    const pan = useRef(new Animated.ValueXY()).current;
    const xAxisActionThreshold = 50;

    const animatedBackgroundColors = pan.x.interpolate({
        inputRange: [-xAxisActionThreshold, 0, xAxisActionThreshold],
        outputRange: [
            'rgba(255, 0, 0, 0.6)',
            Colors.themeColors.backgroundSecondary,
            'rgba(0, 0, 150, 0.5)',
        ],
        extrapolate: 'clamp',
    });

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
                // If left-swipe further than xAxisActionThreshold
                if (gestureState.dx < -xAxisActionThreshold) {
                    deleteAnimation.start(() => {
                        deleteItem(item);
                    })
                }
                // If right-swipe further than xAxisActionThreshold
                if (gestureState.dx > xAxisActionThreshold) {
                    navigation.navigate('AddScreen', { itemToEdit: item });
                }
                resetAnimation.start();
            },
        }),
    ).current;

    return (
        <Animated.View style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],

        }} {...panResponder.panHandlers} >
            <Animated.View style={[styles.item, { backgroundColor: animatedBackgroundColors }]}>
                <Text style={[styles.text,]}>{item.name}</Text>
                <Text style={[styles.text, { textAlign: 'center' }]}>{Categories[item.category]}</Text>
                <Text style={[styles.text, { textAlign: 'right' }]}>{item.price}:-</Text>
                <Text style={[styles.text, { textAlign: 'right' }]}>{item.articleId}</Text>
            </Animated.View>
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
        fontSize: 16,
        color: 'white'
    },

})

export default TodoItem;