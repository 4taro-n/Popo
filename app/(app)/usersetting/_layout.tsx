import { Tabs, Stack, router } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { Button } from 'react-native';
import main from './index';

export default function SettingLayout() {
	const { colorScheme } = useColorScheme();

	return (
		// <Tabs
		// 	screenOptions={{
		// 		headerShown: false,
		// 		tabBarStyle: {
		// 			backgroundColor:
		// 				colorScheme === "dark" ? "hsl(240, 10%, 3.9%)" : "hsl(0, 0%, 100%)",
		// 		},
		// 		tabBarShowLabel: false,
		// 	}}
		// >
		// 	<Tabs.Screen name="index" />
		// 	<Tabs.Screen name="two" />
		// </Tabs>
		<Stack
			screenOptions={{
				headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
					// headerLeft: () => <Button onPress={() => router.push("/(app)")} title="back" />
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="basic" />
			<Stack.Screen name="goal" />
            <Stack.Screen name="map" />
            <Stack.Screen name="tutorial" />
            <Stack.Screen name="policy" />
            <Stack.Screen name="feedback" />
		</Stack>
	);
}
