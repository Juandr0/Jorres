import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from './sections/header';
import Body from './sections/body';
import Colors from '../../constants/AppColors';
import { StackScreens } from '../../navigation/screenTypes';
import AddFab from '../../components/AddFab';

interface IProps {
    navigation: NativeStackNavigationProp<StackScreens>;
}

const ListScreen: React.FC<IProps> = ({ }) => {
    return (
        <View style={styles.container}>
            <Header />
            <Body />
            <AddFab />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.themeColors.backgroundPrimary,
    },
});

export default ListScreen;
