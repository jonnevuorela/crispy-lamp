import { Stack } from "expo-router";
import { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Layout = () => {
const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
});

const onLayoutRootView = useCallback(async () => {
    console.log("Fonts loaded:", fontsLoaded);

    if (fontsLoaded) {
    await SplashScreen.hideAsync();
    }
}, [fontsLoaded]);

/* Ongelma splashscreenin kanssa
useEffect(() => {
    const preventAutoHide = async () => {
    await SplashScreen.preventAutoHideAsync();
    };
    preventAutoHide();
    return () => {
    SplashScreen.hideAsync();
    };
}, []);*/

if (!fontsLoaded) return null;

return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;