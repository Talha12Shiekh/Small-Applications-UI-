import FruitsMainScreen from "./Components/FruitsMainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./Components/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"FruitsMainScreen"}>
        <Stack.Screen
          name={"FruitsMainScreen"}
          component={FruitsMainScreen}
        />
        <Stack.Screen
          name={"DetailsScreen"}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
