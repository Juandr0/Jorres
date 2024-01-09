import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/AppColors'

export default function AddFab() {
    return (
        <Pressable style={({ pressed }) => [
            styles.AddFab,
            pressed && styles.AddFabPressed,
        ]} onPressIn={() => { console.log('pressed') }}>
            <Ionicons name='add-circle' size={70} color={'white'} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    AddFab: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    AddFabPressed: {
        opacity: 0.7
    }
});
