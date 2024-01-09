import { View, ViewStyle } from 'react-native';
import Colors from '../constants/AppColors';

const dividerStyles: ViewStyle = {
    height: 1,
    backgroundColor: Colors.themeColors.backgroundTertiary,
    width: '100%'
}

const Divider = () => <View style={dividerStyles} />

export default Divider;