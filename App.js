import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text>Un poco de Texto</Text>
      </View>
      <Text>Más Texto</Text>
      <Button title='tap me!!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 0.05,
    backgroundColor: '#adfadf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
