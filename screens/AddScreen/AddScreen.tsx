import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddScreen() {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [pickervalue, setPickervalue] = useState(null)
    const [productName, setProductName] = useState('')
    const [productCategories, setProductCategories] = useState([
        { label: 'Food', value: 'food' },
        { label: 'Snacks', value: 'snacks' },
        { label: 'Other', value: 'other' },
    ]);
    const [productPrice, setProductPrice] = useState('')
    const [productId, setProductId] = useState('')

    const styles = StyleSheet.create({
        AddScreenContainer: {
            marginTop: 50,
        },
        textInput: {
            height: 50,
            width: 250,
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
            alignSelf: 'center'
        },
    })

    return (
        <View style={styles.AddScreenContainer}>
            <TextInput
                style={styles.textInput}
                editable={true}
                value={productName}
                onChangeText={setProductName}
                placeholder="Enter name" />
            <DropDownPicker
                style={styles.textInput}
                open={pickerOpen}
                value={pickervalue}
                items={productCategories}
                setOpen={setPickerOpen}
                setValue={setPickervalue}
                setItems={setProductCategories}
                dropDownContainerStyle={{ width: 250, alignSelf: 'center' }}
                placeholder="Select a category"

            />
            <TextInput
                style={styles.textInput}
                value={productPrice}
                keyboardType="numeric"
                onChangeText={setProductPrice}
                placeholder="Enter price" />
            <TextInput
                style={styles.textInput}
                value={productId}
                onChangeText={setProductId}
                keyboardType="numeric"
                placeholder="Enter Article id number" />

            <Button
                onPress={() => { console.log(`${productName} hej`) }}
                title="Save item"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}