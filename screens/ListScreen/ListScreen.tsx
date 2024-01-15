import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from './sections/header';
import Body from './sections/body';
import Colors from '../../constants/AppColors';
import { StackScreens } from '../../navigation/screenTypes';
import Categories from '../../constants/categories';
import BottomSheetComponent from '../AddScreen/BottomSheetComponent';
import { Item } from '../../interfaces/Item';
import ItemsManager from '../../classes/ItemsManager'

// interface IProps {
//     navigation: NativeStackNavigationProp<StackScreens>;
// }

// const ListScreen: React.FC<IProps> = ({ }) => {


const ListScreen = () => {
    const itemsManager = new ItemsManager();

    return (
        <View style={styles.container}>
            <Header />
            <Body itemsManager={itemsManager} />
            <BottomSheetComponent itemsManager={itemsManager} />
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
