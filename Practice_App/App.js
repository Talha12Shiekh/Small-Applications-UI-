import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cart from "./Screens/Cart";
import Products from "./Screens/Products";
import Messages from "./Screens/Messages";
import Profile from "./Screens/Profile";
import CustomTabBar from "./Components/CustomTabBar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Montserrat_300Light,
  Montserrat_200ExtraLight,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import { useEffect,useCallback, useState } from "react";

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_500Medium,
          Montserrat_600SemiBold,
          Montserrat_700Bold,
          Montserrat_800ExtraBold,
          Montserrat_900Black,
          Montserrat_200ExtraLight,
          Montserrat_300Light
        });
      } catch (err) {
        console.log(err);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

 

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <NavigationContainer
      
      >
        <Tab.Navigator
         tabBar={props => <CustomTabBar {...props} />}
         screenOptions={{headerShown:false}}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
