import { Text, View, Button as Btn } from "react-native";
import { Button } from "@/components/ui";
import { useSupabase } from "@/hooks/useSupabase";
import { Link, useRouter } from "expo-router";

export default function RoutingScreen() {
    const router = useRouter();

	return (
		<View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
			<Text className="text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl">
                routing page
			</Text>
			<Text className="text-sm text-muted-foreground text-center">
				routing page
			</Text>
            {/* <Btn onPress={() => router.push("/(app)/")} title="戻る" /> */}
			<Btn onPress={() => router.push("/(app)/route/routing-result")} title="終了" />
		</View>
	);
}
