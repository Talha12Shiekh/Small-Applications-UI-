import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Workout from './Screens/Workout';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Workout"} component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
