import React, { useEffect, useState, useRef } from 'react';
import  {StyleSheet, Text, View, Button }  from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map() {
    const mapRef = useRef<MapView>(null);
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [permission, setPermission] = useState<boolean>(false);

    const getUserLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
        setPermission(true);
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        return location;
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            pitchEnabled={true}
            initialRegion={{
                latitude: 37.83381888486939,
                longitude: -122.48369693756104,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            //仮
            // mapPadding={{top:680, right:0, left:0, bottom:0}}
            >
            </MapView>
            {/* <Text>tesuto</Text> */}
            
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
});