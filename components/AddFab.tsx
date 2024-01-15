import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationContainerRef } from '@react-navigation/native';
import { StackScreens } from '../navigation/screenTypes';

const AddFab: React.FC = () => {
    const navigation = useNavigation<NavigationContainerRef<StackScreens>>();
    return (
        <Pressable
            style={({ pressed }) => [styles.AddFab, pressed && styles.AddFabPressed]}
            onPress={() => {
                navigation.navigate('AddScreen');
            }}
        >
            <Ionicons name="add-circle" size={70} color={'white'} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    AddFab: {
        position: 'absolute',
        right: 4,
        bottom: 4,
    },
    AddFabPressed: {
        opacity: 0.7,
    },
});

export default AddFab;
