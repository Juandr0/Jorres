import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from './navigation/screenTypes';
import { Provider } from 'jotai';

import Colors from './constants/AppColors'
import ListScreen from './screens/ListScreen/ListScreen';
import AddScreen from './screens/AddScreen/AddScreen';
import React from 'react';

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={ListScreen} options={{ title: 'Admin page' }} />
            <Stack.Screen name='AddScreen' component={AddScreen} initialParams={{ itemToEdit: undefined }} options={{ title: 'Add new product' }} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaView >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColors.backgroundPrimary,
  },
});
