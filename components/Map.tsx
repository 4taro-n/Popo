import React, { useEffect, useState, useRef } from 'react';
import  {StyleSheet, Text, View, Button }  from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE, Region, Marker, LatLng, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

type MapProps = {
    showMarker: boolean;
    setShowMarker: React.Dispatch<React.SetStateAction<boolean>>;
    marker: LatLng | undefined;
    setMarker: React.Dispatch<React.SetStateAction<LatLng | undefined>>;
};

export default function Map({ showMarker, setShowMarker, marker, setMarker}: MapProps) {
    const mapRef = useRef<MapView>(null);
    // const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [permission, setPermission] = useState<boolean>(false);
    //latitude: 37.83381888486939, longitude: -122.48369693756104, latitudeDelta: 0.0922, longitudeDelta: 0.0421,
    const [region, setRegion] = useState<Region>({ latitude: 0, longitude: 0, latitudeDelta: 0.0922, longitudeDelta: 0.0421, });
    const [isBird, setIsBird] = useState<boolean>(false); 

    const getUserLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
        setPermission(true);
        const currentLocation =  await Location.getCurrentPositionAsync();
        // console.log("useEffect", currentLocation.coords.latitude);
        setRegion({latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421, });
    };

    const onRegionChange = (currentRegion: Region) => {
        // console.log(currentRegion);
        setRegion(currentRegion);
    }

    const handleMapPress = async (e: any) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        console.log("pin's latitude:", latitude);
        console.log("pin's longitude:", longitude);
        await setMarker({latitude, longitude});
        // setShowMarker(prevShowMarker => !prevShowMarker);
        setShowMarker(true);
    };


    const handleViewChange = async () => {
        if (mapRef.current) {
            const currentCamera = await mapRef.current.getCamera();
            console.log(currentCamera);
            const newPitch = isBird ? 0 : 40;
            const newZoom = isBird ? (currentCamera.zoom || 14) - 1 : (currentCamera.zoom || 15) + 1;
            mapRef.current.animateCamera({
                center: {latitude: region.latitude, longitude: region.longitude},
                pitch: newPitch,
                zoom: newZoom,
            });
            setIsBird(!isBird);
        }
    }

    useEffect(() => {
        getUserLocationPermission();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            pitchEnabled
            initialRegion={region}
            onRegionChangeComplete={(onRegionChange)}
            onPress={handleMapPress}
            //仮（androidのみ）
            // mapPadding={{top:680, right:0, left:0, bottom:0}}
            >
                {showMarker && marker && (
                    <Marker 
                    coordinate={marker}
                    draggable
                    onDragEnd={handleMapPress}
                    >
                        <Callout>
                            <View style={styles.calloutView}>
                                <Text style={styles.calloutTitle}>テスト</Text>
                                <Text style={styles.calloutDescription}>テスト</Text>
                            </View>
                        </Callout>
                    </Marker>
                )}
            </MapView>
            {/* <Text>tesuto</Text> */}
            <View style={styles.changeViewBtn}>
                <Button  title="Change View" onPress={handleViewChange} />
            </View>
            {/* <View style={styles.showMarkerBtn}>
                <Button title={showMarker ? "マーカー非表示" : 'マーカー表示'} onPress={() => setShowMarker(prevShowMarker => !prevShowMarker)} />
            </View> */}
            {showMarker && (
                <View style={styles.showMarkerBtn}>
                    <Button title="マーカー非表示" onPress={() => setShowMarker(!showMarker)} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        width: '100%',
        height: '100%',
        ...StyleSheet.absoluteFillObject,
    },
    calloutView: {
        width: 200, // カスタムサイズ
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    calloutTitle: {
        fontWeight: 'bold',
        color: '#333',
    },
    calloutDescription: {
        color: '#666',
    },
    changeViewBtn: {
        position: 'absolute', 
        bottom: 100, 
        left: 19, 
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
    },
    showMarkerBtn: {
        position: 'absolute',
        bottom: 150,
        left: 19, 
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
    },
});