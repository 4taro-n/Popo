import React, { useState } from 'react';
import { Text, View, Button as Btn, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "@/components/ui";
import { useSupabase } from "@/hooks/useSupabase";
import { Link, router, useRouter  } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { LeftDirectionIcon } from '@/components/ui/Svg';
import IndexPage from '@/components/modal/IndexPage';
import SettingMenuPage from '@/components/modal/SettingMenuPage';
import ProfilePage from '@/components/modal/ProfilePage';
import AddressPage from '@/components/modal/AddressPage';
import NavigationPage from '@/components/modal/NavigationPage';
import PolicyPage from '@/components/modal/PolicyPage';


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
	const [pageToName, setPageToName] = useState('戻る');

	const navigateAndCloseModal = async (path: any) => {
		// await router.push("../");
		// router.push(path);
		router.replace(path);
	};

	type ModalHeaderProps = {
		onBack: () => void; 
		back: string;
		title: string; 
	};

	const ModalHeader: React.FC<ModalHeaderProps> = ({ onBack, back, title }) => {
	return (
		<View style={styles.modal_header}>
			<TouchableOpacity onPress={onBack}>
				<View style={styles.modal_icon}>
					<LeftDirectionIcon/>
					<Text style={styles.modal_icon_Text}>{back}</Text>
				</View>
			</TouchableOpacity>
			<Text style={styles.modal_header_title}>{title}</Text>
		</View>
	);
	};
	
	switch (page) {
		case 'IndexPage':
			return (
				<View>
					<IndexPage setPage={setPage} />
				</View>
				
			);
		case 'SettingMenuPage':
			return (
				<View style={styles.modal_setting_container}>
					<ModalHeader onBack={() => setPage('IndexPage')} back={'戻る'} title={'設定'} />
					<SettingMenuPage setPage={setPage} />
				</View>
			);
		case 'ProfilePage':
			return (
				<View style={styles.modal_setting_container}>
					<ModalHeader onBack={() => setPage('SettingMenuPage')} back={'設定'} title={'プロフィール'} />
					<ProfilePage setPage={setPage} />
				</View>
			);
		case 'AddressPage':
			return (
				<View style={styles.modal_setting_container}>
					<ModalHeader onBack={() => setPage('SettingMenuPage')} back={'設定'} title={'住所設定'} />
					<AddressPage setPage={setPage} />
				</View>
			);
		case 'NavigationPage':
			return (
				<View style={styles.modal_setting_container}>
					<ModalHeader onBack={() => setPage('SettingMenuPage')} back={'設定'} title={'ナビゲーション設定'} />
					<NavigationPage setPage={setPage} />
				</View>
			);
		case 'PolicyPage':
			return (
				<View style={styles.modal_setting_container}>
					<ModalHeader onBack={() => setPage('SettingMenuPage')} back={'設定'} title={'ポリシー'} />
					<PolicyPage setPage={setPage} />
				</View>			
			);
		default:
			return <View />;
	}
}

export default function ModalScreen() {
	return (
		<View style={styles.modalContainer}>
			<ModalContent />
		</View>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: 'rgba(225, 188, 42, 1)',
	},
    modal_header: {
		marginBottom: 15,
	},
	modal_icon: {
		flexDirection: 'row',
	},
	modal_icon_Text: {
		fontSize: 16,
		fontWeight: '600',
		marginLeft: 10,
	},
	modal_header_title: {
		fontSize: 24,
		fontWeight: '600',
		marginTop: 30, 
	},
	modal_setting_container: {
		flex: 1,
		margin: 25,
	}
});
