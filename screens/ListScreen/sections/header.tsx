import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../constants/AppColors'
import Divider from '../../../components/Divider'

export default function Header() {
    return (
        <View>
            <Divider />
            <View style={styles.itemCategories}>
                <Text style={[styles.itemsText]}>Name</Text>
                <Text style={[styles.itemsText]}>Category</Text>
                <Text style={[styles.itemsText]}>Price</Text>
                <Text style={[styles.itemsText]}>Id</Text>
            </View>
            <Divider />
        </View >
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: Colors.themeColors.backgroundSecondary,
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    },
    itemsText: {
        color: 'white',
        fontWeight: 'bold'
    },
    itemCategories: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
})

