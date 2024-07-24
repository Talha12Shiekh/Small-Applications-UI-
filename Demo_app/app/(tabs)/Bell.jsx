import { View, Text, StyleSheet } from 'react-native';

export default function Save() {
  return (
    <View style={styles.container}>
      <Text>Savev</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});