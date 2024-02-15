import { Tabs,Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";

export default function RouteLayout() {
	const { colorScheme } = useColorScheme();

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="[id]" />
			<Stack.Screen name="routing" />
			<Stack.Screen name="routing-result" />
		</Stack>
	);
}
