import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackScreens } from '../navigation/screenTypes';

interface AddFabProps {
    navigation: NativeStackNavigationProp<StackScreens>;
}

const AddFab: React.FC<AddFabProps> = ({ navigation }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.AddFab, pressed && styles.AddFabPressed]}
            onPress={() => navigation.navigate('AddScreen')}
        >
            <Ionicons name="add-circle" size={70} color={'white'} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    AddFab: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    AddFabPressed: {
        opacity: 0.7,
    },
});

export default AddFab;
