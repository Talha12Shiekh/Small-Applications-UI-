
import Home from "./Screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TravelDetails from "./Screens/TravelDetails";
import TravelItemDetails from "./Screens/TravelItemDetails";

const Stack = createNativeStackNavigator();

export default function TravelMainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TravelDetails" component={TravelDetails} />
        <Stack.Screen name="TravelItemDetails" component={TravelItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
