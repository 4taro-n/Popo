import React, {useEffect, useState } from "react";
import { Text, View, Button as Btn } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui";
import { useSupabase } from "@/hooks/useSupabase";
import { Link, useLocalSearchParams } from "expo-router";

//latitude, longitude, userLatitude, userLongitude, currentTime, arrivalTime
export default function RouteScreen() {
    const router = useRouter();
    const test = useLocalSearchParams();


	return (
		<View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
			<Text className="text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl">
				route index page
			</Text>
			<Text className="text-sm text-muted-foreground text-center">
				{test.latitude}, {test.longitude}
			</Text>
			<Btn onPress={() => router.push("/(app)/")} title="戻る" />
			<Btn onPress={() => router.push("/(app)/route/routing")} title="移動スタート" />
		</View>
	);
}
