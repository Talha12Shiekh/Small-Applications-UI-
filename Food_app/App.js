import FruitsMainScreen from "./Components/FruitsMainScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./Components/DetailsScreen";
import CartScreen from "./Components/CartScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={"FruitsMainScreen"}>
        <Stack.Screen
          name={"FruitsMainScreen"}
          component={FruitsMainScreen}
        />
        <Stack.Screen
          name={"DetailsScreen"}
          component={DetailsScreen}
        />
        <Stack.Screen
          name={"CartScreen"}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
