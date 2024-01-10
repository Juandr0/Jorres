import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from './sections/header';
import Body from './sections/body';
import Colors from '../../constants/AppColors';
import Divider from '../../components/Divider';
import AddFab from '../../components/AddFab';
import { StackScreens } from '../../navigation/screenTypes';

interface IProps {
    navigation: NativeStackNavigationProp<StackScreens>;
}

const ListScreen: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <Body />
            <Divider />
            <AddFab navigation={navigation} />
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
