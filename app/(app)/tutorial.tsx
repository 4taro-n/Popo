import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { Svg } from 'react-native-svg';
import React from 'react';
import { Link } from "expo-router";
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import { TutorialOne, TutorialTwo, TutorialThree } from '@/components/ui/Svg';


const data = [
	{
		title: <TutorialOne />,
		text: '私たちは、通勤を単なる移動ではなく健康に向けた運動の一歩と捉えています。',
		// image: require('@/assets/walking.svg'),
		image: require('@/assets/walking.png'),
		bg: 'rgba(225, 188, 42, 1)',
	},
	{
		// titleText: '予測不可能な\n毎日',
		titleImg: require('@/assets/tutorialTwo.png'),
		text: 'ランダムナビゲーション機能で、普段とは違う道を歩き通勤してみましょう。\nいつもと違う一日になること間違いないです。',
		image: require('@/assets/map.png'),
		bg: 'rgba(225, 188, 42, 1)',
	},
	{
		titleImg: require('@/assets/tutorialThree.png'),
		text: "たくさん歩いた一日。あまり歩けなかった一日。毎日があなたの物語。グラフで振り返って見てみましょう。",
		image: require('@/assets/graph.png'),
		bg: 'rgba(225, 188, 42, 1)',
	},
];

type Item = typeof data[0];

const styles = StyleSheet.create({
	slide: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
	},
	image: {
		// width: 320,
		// height: 320,
		// marginVertical: 32,
	},
	titleText: {
		fontSize: 40,
		color: 'rgba(0, 0, 0, 1)',
		textAlign: 'center',
		fontFamily: 'zen_maru_gothic',
		fontWeight: 'bold',
	},
	titleImg: {
		// alignSelf: 'flex-start', 
		position: 'absolute', 
		top: 100,
		left: 30,
	},
	text: {
		fontSize: 16,
		color: 'rgba(0, 0, 0, 1)',
		fontFamily: 'zen_maru_gothic',
		textAlign: 'center',
		position: 'absolute', 
		bottom: 110, 
		left: 0, 
		right: 0, 
		paddingHorizontal: 20, 
	},
	buttonCircle: {
		width: 100,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, .2)',
		// borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
		// justifyContent: 'center',
		// alignItems: 'center',
	},
});

export default function TutorialScreen() {
	const router = useRouter();
	useFonts({
		'zen_maru_gothic': require('@/assets/fonts/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf'),
		'sonsie_one': require('@/assets/fonts/Sonsie_One/SonsieOne-Regular.ttf'),
	})

	_renderItem = ({item}: {item: Item}) => {
		return (
			<View
				style={[
					styles.slide,
					{
					backgroundColor: item.bg,
					},
				]}>
				<View style={styles.titleImg}>{item.title}</View>
				{/* <Text style={styles.titleText}>{item.titleText}</Text> */}
				<Image source={item.titleImg} style={styles.titleImg} />
				<Image source={item.image} style={styles.image} />
				<Text style={styles.text}>{item.text}</Text>
			</View>
		)
	}

	_keyExtractor = (item: Item) => item.title;

	_renderDoneButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Text>始めよう</Text>
				{/* <Icon
				name="md-checkmark"
				color="rgba(255, 255, 255, .9)"
				size={24}
				/> */}
			</View>
		);
	}
	
	return (
		<View style={{flex: 1}}>
			<StatusBar translucent backgroundColor="transparent" />
			<AppIntroSlider
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
				data={data}
				showNextButton={false}
				renderDoneButton={this._renderDoneButton}
				onDone = {() => { router.push("/");}}
        /></View>
	);
}
