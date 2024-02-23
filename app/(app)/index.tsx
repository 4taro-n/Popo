import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Button as Btn } from "react-native";
import { Link, useRouter } from "expo-router";
import Map from '@/components/Map';
import {AvatarIcon} from '@/components/ui/Svg';
import MapView, { LatLng } from 'react-native-maps';

export default function MapScreen() {
	const router = useRouter();
	const [showMarker, setShowMarker] = useState<boolean>(false);
	const [destination, setDestination] = useState<LatLng | undefined>();
	const [latitude, setLatitude] = useState<number>();
	const [longitude, setLongitude] = useState<number>();

	useEffect(() => {
		setLatitude(destination?.latitude);
		setLongitude(destination?.longitude);
    }, [destination]);

	return (
		<View style={styles.container}>
			<Map showMarker={showMarker} setShowMarker={setShowMarker} marker={destination} setMarker={setDestination} />
			<View style={styles.buttonContainer}>
				{/* <Btn title="Change View" onPress={() => { router.push("/(app)/usersetting");}} /> */}
				{/* <Link href="/(app)/usersetting"><AvatarIcon /></Link> */}
				<Link href="/(app)/modal"><AvatarIcon /></Link>
			</View>
			{/* <View style={styles.destinationBtn}>
				<Link href="/route/">目的地セット</Link>
			</View> */}
			{showMarker && (
                <View style={styles.destinationBtn}>
                    <Link href={{pathname: "/route/", params: { test: '123', latitude: latitude? latitude : 0, longitude: longitude? longitude: 0}}}>目的地セット</Link>
                </View>
            )}
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
	destinationBtn: {
		// alignItems: 'center',
		// justifyContent: 'center',
		position: 'absolute', 
		right: 50,
        bottom: 300, 
		backgroundColor: 'red',
	},
});
