import { Text, View, Button as Btn, Platform, StyleSheet } from "react-native";
import { Button } from "@/components/ui";
import { useSupabase } from "@/hooks/useSupabase";
import { Link, Stack, router } from "expo-router";
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { insertTestData } from '@/lib/database/Test';

export default function SettingScreen() {
	const { signOut, user } = useSupabase();

	// useEffect(() => {
    //     insertTestData(user.id);
    // }, []);

	


	useFonts({
		'zen_maru_gothic': require('@/assets/fonts/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf'),
	})

	return (
		<View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
            <Stack.Screen options={{ 
                title: "Overview",
                // headerLeft: () => <Btn onPress={() => router.push("/(app)")} title="back" />
				headerLeft: Platform.OS === 'ios' 
				? () => <Btn onPress={() => router.push("/(app)")} title="Back" /> : undefined,
				
            }} />
			<Text className="text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl">
				設定
			</Text>
			<Text className="text-sm text-muted-foreground text-center">
				Sign out and return to the welcome 
			</Text>
			<Button
				className="w-full"
				size="default"
				variant="default"
				onPress={() => {
					signOut();
				}}
			>
				Sign out
			</Button>

			{user ? (
				<View>
					<Text style={styles.text}>User Info:</Text>
					<Text style={styles.text}>ID: {user.id}</Text>
					<Text style={styles.text}>Email: {user.email}</Text>
				</View>
			) : (
				<Text style={styles.text}>No user logged in.</Text>
			)}
			<Btn onPress={() => router.push("/usersetting/basic")} title="基本情報" />
			<Btn onPress={() => router.push("/usersetting/feedback")} title="フィードバック" />
			<Btn onPress={() => router.push("/usersetting/goal")} title="目標設定" />
			<Btn onPress={() => router.push("/usersetting/map")} title="地図設定" />
			<Btn onPress={() => router.push("/usersetting/policy")} title="ポリシー" />
			<Btn onPress={() => router.push("/usersetting/tutorial")} title="使い方" />

			{/* 開発用 */}
			<Btn onPress={() => router.push("/tutorial")} title="チュートリアル" />
			<Text style={styles.text}>テストです</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'red',
		fontFamily: 'zen_maru_gothic',
	}
});
