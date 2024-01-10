import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from './navigation/screenTypes';

import Colors from './constants/AppColors'
import ListScreen from './screens/ListScreen/ListScreen';
import AddScreen from './screens/AddScreen/AddScreen';

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={ListScreen} options={{ title: 'Jorres Kiosk - Overview' }} />
          <Stack.Screen name='AddScreen' component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColors.backgroundPrimary,
  },
});
