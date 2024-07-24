import React, { lazy, Suspense, useEffect, useState } from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
const AppBar = lazy(() => import("../../Components/AppBar"));
const DiscountCard = lazy(() => import("../../Components/DiscountCard"));
const Dots = lazy(() => import("../../Components/DotsComponent"));
const ScrollList = lazy(() => import("../../Components/ScrollList"));
const Cards = lazy(() => import("../../Components/Cards"));
import {
  WorkSans_600SemiBold,
  WorkSans_400Regular,
} from "@expo-google-fonts/work-sans";
import {LazyLoadingScreen} from "./LazyLoadingScreen";

export default function Home() {
  
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ WorkSans_600SemiBold, WorkSans_400Regular });
      } catch (err) {
        console.log(err);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = React.useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


 

  return (
    <PaperProvider>
    <Suspense fallback={<LazyLoadingScreen/>}>
      <View style={{ flex: 1, backgroundColor: "white" }} onLayout={onLayout}>
        <AppBar />
        <DiscountCard />
        <Dots />
        <ScrollList />
        <Cards />
      </View>
    </Suspense>
    </PaperProvider>
  );
}
