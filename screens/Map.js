import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import * as Location from 'expo-location';



export default function Map(props){
    const [markers,setMarkers] = useState([])

    const showMarker = (e) => {
        const newMarker = e.nativeEvent.coordinate
        setMarkers([...markers, newMarker]);
    };

    return(
        <MapView       
        style={styles.map}
        region={props.location}
        onLongPress={showMarker}
        >
            {markers.map((marker, index) => (
            <Marker
            key={index}
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            />
            ))}

        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height: '100%',
        width: '100%'
    }
});