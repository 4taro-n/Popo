import React, { useState } from 'react';
import { Text, View, Button as Btn } from "react-native";
import { Button } from "@/components/ui";
import { useSupabase } from "@/hooks/useSupabase";
import { Link, router, useRouter  } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import IndexPage from '@/components/modal/IndexPage';

// export default function TabTwoScreen() {
// 	const { signOut } = useSupabase();
// 	const router = useRouter();
// 	// const isPresented = router.canGoBack();

// 	const navigateAndCloseModal = async (path: any) => {
// 		// await router.push("../");
//         // router.push(path);
// 		router.replace(path);
//     };

// 	return (
// 		<View className="flex-1 items-center justify-center bg-background p-4 gap-y-4">

// 			<Link href="../">Dismiss</Link>
// 			<Link href="/(app)/usersetting">setting</Link>

// 			{/* <Button title="設定へ移動" onPress={() => navigateAndCloseModal("/(app)/usersetting")} /> */}

// 			<Btn onPress={() => navigateAndCloseModal("/(app)/usersetting")} title="設定へ移動" />
// 			<Link href="/(app)/three">three</Link>
// 			<Link href="/(app)/modal/test">test</Link>

// 		</View>
// 	);
// }

function ModalContent() {
	const [page, setPage] = useState('IndexPage');

	const navigateAndCloseModal = async (path: any) => {
		// await router.push("../");
		// router.push(path);
		router.replace(path);
	};
	
	switch (page) {
		case 'IndexPage':
			return (
				// <View>
				// 	<Text>Page 1</Text>
				// 	<Btn title="Go to Page 2" onPress={() => setPage('page2')} />
				// 	<Btn onPress={() => navigateAndCloseModal("/(app)/usersetting")} title="設定へ移動" />
				// </View>
				<IndexPage setPage={setPage} />
			);
		case 'page2':
			return (
			<View>
				<Text>Page 2</Text>
				<Btn title="Back to Page 1" onPress={() => setPage('page1')} />
			</View>
			);
		default:
			return <View />;
	}
}

export default function ModalScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ModalContent />
		</View>
	);
}