import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddFabProps {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddFab: React.FC<AddFabProps> = ({ setIsVisible }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.AddFab, pressed && styles.AddFabPressed]}
            onPress={() => setIsVisible(true)}
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
