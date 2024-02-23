import { Tabs,Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

export default function AppLayout() {
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
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="modal" options={{ presentation: 'modal',}}/>
			<Stack.Screen name="tutorial" />
		</Stack>
	);
}
