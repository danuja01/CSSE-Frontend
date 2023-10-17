import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "ABeeZee-Regular": require("../assets/fonts/ABeeZee-Regular.ttf"),
    "ABeeZee-Italic": require("../assets/fonts/ABeeZee-Italic.ttf"),
    "AbhayaLibre-Regular": require("../assets/fonts/AbhayaLibre-Regular.ttf"),
    "AbhayaLibre-Bold": require("../assets/fonts/AbhayaLibre-Bold.ttf"),
    "AbhayaLibre-SemiBold": require("../assets/fonts/AbhayaLibre-SemiBold.ttf"),
    "AbhayaLibre-Medium": require("../assets/fonts/AbhayaLibre-Medium.ttf"),
    "AbhayaLibre-ExtraBold": require("../assets/fonts/AbhayaLibre-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      onLayout={onLayoutRootView}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    />
  );
};

export default Layout;