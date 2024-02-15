import { Text, View, StyleSheet, Button as Btn } from "react-native";
import { Link, useRouter } from "expo-router";
import Map from '@/components/Map';
import {AvatarIcon} from '@/components/ui/Svg';

export default function MapScreen() {
	const router = useRouter();
	return (
		// <View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">
		// 	<Text className="text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl">
		// 		Home
		// 	</Text>
		// 	<Text className="text-sm text-muted-foreground text-center">
		// 		You are now authenticated and this session will persist even after
		// 		closing the app.
		// 	</Text>
		// 	<Link href="/two">two</Link>
		// 	<Link href="/(app)/usersetting">setting</Link>
		// </View>
		<View style={styles.container}>
			<Map />
			<View style={styles.buttonContainer}>
				{/* <Btn title="Change View" onPress={() => { router.push("/(app)/usersetting");}} /> */}
				<Link href="/(app)/usersetting"><AvatarIcon /></Link>
			</View>
		</View>

	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute', 
        bottom: 40, 
        left: 19, 
    },
});
