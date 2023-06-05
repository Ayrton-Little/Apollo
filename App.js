import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorGuessScreen from './screens/ColorGuessScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World!</Text> */}
      <ColorGuessScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00807F',
    borderWidth: 2,
    borderColor: 'red',
    paddingVertical: 50
  },
});
