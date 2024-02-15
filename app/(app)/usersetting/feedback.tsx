import { Text, View, Button as Btn } from "react-native";
import { Button } from "@/components/ui";
import { useSupabase } from "@/hooks/useSupabase";
import { Link, Stack, router } from "expo-router";

export default function FeedbackScreen() {

	return (
		<View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
			<Text className="text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl">
				Basic 
			</Text>
		</View>
	);
}