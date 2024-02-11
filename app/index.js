import React from "react";
import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";


import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";

const HomeScreen = () => {
    const router = useRouter();

    return (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
    );
};


return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView showVerticalScrollIndicator={true}>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
            }}
        >
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>
    </ScrollView>
</SafeAreaView>
);

const HomeNavigator = () => {
    const router = useRouter();

    return (
        <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "home",
            }}
        />
        </Stack.Navigator>
    );
};
export const Home;
