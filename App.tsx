import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './components/header'
import Body from './components/body'
import AddFab from './components/AddFab';
import Colors from './constants/AppColors'
import Divider from './components/Divider';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <Body />
        <Divider />
        <AddFab />
      </View>
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
