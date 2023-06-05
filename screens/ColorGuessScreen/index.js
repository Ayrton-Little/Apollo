import { StyleSheet, Text, View } from 'react-native';
import ColorDisplay from './components/ColorDisplay';
import ColorGuesser from './components/ColorGuesser';

export default function ColorGuessScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Game Loop!</Text>
        <ColorDisplay />
        <ColorGuesser />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00807F',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '95%',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });