import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import AppColors from "../../constants/AppColors";
import { useAtom } from 'jotai';
import { Item } from "../../interfaces/Item";
import Categories from "../../constants/categories";
import { useNavigation, NavigationContainerRef } from '@react-navigation/native';
import { ItemsManagerAtom } from "../../hooks/itemsManagerAtom";
import { StackScreens } from "../../navigation/screenTypes";

const AddScreen: React.FC<Item> = (itemToEdit?: Item) => {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [pickervalue, setPickervalue] = useState<Categories | null>(null);
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productId, setProductId] = useState('')

    useEffect(() => {
        if (itemToEdit != null) {
            setPickervalue(itemToEdit.category);
            setProductName(itemToEdit.name);
            setProductPrice(itemToEdit.price.toString());
            setProductId(itemToEdit.articleId.toString());
        }
    }, [])

    const [itemsManager] = useAtom(ItemsManagerAtom);
    const navigation = useNavigation<NavigationContainerRef<StackScreens>>();

    const styles = StyleSheet.create({
        AddScreenContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: AppColors.themeColors.backgroundTertiary,
        },
        buttonStyling: {
            margin: 25,
            height: 50,
            width: 100,
            borderRadius: 10,
            backgroundColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10
        },

        textInput: {
            height: 50,
            width: 250,
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
            alignSelf: 'center',
            backgroundColor: 'white'
        },
        buttonsRow: {
            marginTop: 10,
            flexDirection: 'row',
            alignSelf: 'center',
        },
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
                            navigation.goBack();
                        }}
                        title="Save item"
                        color="white"
                        accessibilityLabel="Save new item"
                    />
                </View>
                <View style={styles.buttonStyling}>
                    <Button
                        onPress={() => {
                            navigation.goBack();
                        }}
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