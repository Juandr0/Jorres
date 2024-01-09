import { View, StyleSheet } from "react-native";
import AddFab from "./AddFab";
import Divider from "./Divider";
import Colors from '../constants/AppColors'

export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <Divider />
            <AddFab />
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        maxHeight: 90,
        alignItems: 'flex-end',
        backgroundColor: Colors.themeColors.backgroundPrimary
    }
})