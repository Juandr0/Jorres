import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import Colors from '../constants/AppColors'
import Divider from './Divider'

export default function Header() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> Jorres Kiosk - admin page</Text>
            </View>
            <Divider />
            <View style={styles.itemCategories}>
                <Text style={styles.itemsText}>Name</Text>
                <Text style={styles.itemsText}>Category</Text>
                <Text style={styles.itemsText}>Price</Text>
            </View>
            <Divider />
        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: Colors.themeColors.tertiary,

    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemsText: {
        color: 'white',
        fontWeight: 'bold'
    },
    itemCategories: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
})

