import { View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
export default function LoadingComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color={MD2Colors.red800} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
