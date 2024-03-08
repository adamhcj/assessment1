import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import pin from 'leaflet/dist/images/marker-icon.png'


function LeafletMap(passedlatlng){
    const latlng = passedlatlng.passedlatlng;
    const pinMB = L.icon({
        iconUrl: pin,
        iconSize: [24, 41],
        iconAnchor: [0, 44],
        popupAnchor: [12, -40],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
      });

    return (
        <div style={{height: '30vh', width: '25vw', border:'2px solid black'}}>
            <MapContainer style={{height: '100%'}} center={[latlng.lat, latlng.lng]} zoom={1} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latlng.lat, latlng.lng]} icon={pinMB}>
                    <Popup>
                        lat: {latlng.lat} <br />
                        lng: {latlng.lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default LeafletMap;