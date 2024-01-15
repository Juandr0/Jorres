import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import AppColors from "../../constants/AppColors";
import ItemsManager from "../../classes/ItemsManager";
import { Item } from "../../interfaces/Item";
import Categories from "../../constants/categories";

interface AddScreenProps {
    setVisibility: () => void;
    itemsManager: ItemsManager;
}

const AddScreen: React.FC<AddScreenProps> = ({ setVisibility, itemsManager }) => {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [pickervalue, setPickervalue] = useState(null)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productId, setProductId] = useState('')

    const styles = StyleSheet.create({
        AddScreenContainer: {
            flex: 1,
            paddingBottom: 40,
            backgroundColor: AppColors.themeColors.backgroundTertiary
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
        buttonsRow: {
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'

        },
        buttonStyling: {
            marginHorizontal: 25,
            width: 100,
            borderRadius: 10,
            borderWidth: 1,
        }
    })

    return (
        <View style={styles.AddScreenContainer}>
            <TextInput
                style={styles.textInput}
                editable={true}
                value={productName}
                onChangeText={setProductName}
                placeholder="Enter name"
            />

            <DropDownPicker
                style={styles.textInput}
                open={pickerOpen}
                value={pickervalue}
                items={[
                    { label: 'Food', value: Categories.Food },
                    { label: 'Snacks', value: Categories.Snacks },
                    { label: 'Other', value: Categories.Other },
                ]}
                setOpen={setPickerOpen}
                setValue={setPickervalue}
                dropDownContainerStyle={{ width: 250, alignSelf: 'center' }}
                placeholder="Select a category"
            />

            <TextInput
                style={styles.textInput}
                value={productPrice}
                keyboardType="numeric"
                onChangeText={setProductPrice}
                placeholder="Enter price"
            />
            <TextInput
                style={styles.textInput}
                value={productId}
                onChangeText={setProductId}
                keyboardType="numeric"
                placeholder="Enter Article id number"
            />

            <View style={styles.buttonsRow}>
                <View style={styles.buttonStyling}>
                    <Button
                        onPress={() => {
                            const item: Item = {
                                name: productName,
                                category: pickervalue!,
                                price: parseFloat(productPrice),
                                articleId: parseInt(productId),
                            };
                            itemsManager.addItem(item);
                            setVisibility();
                        }}
                        title="Save item"
                        color="blue"
                        accessibilityLabel="Save new item"
                    />
                </View>
                <View style={styles.buttonStyling}>
                    <Button
                        onPress={() => setVisibility()}
                        title="Cancel"
                        color="red"
                        accessibilityLabel="Cancel"
                    />
                </View>
            </View>
        </View>
    );
};

export default AddScreen