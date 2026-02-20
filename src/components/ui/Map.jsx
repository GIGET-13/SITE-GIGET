import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, LayersControl } from "react-leaflet";
import L from "leaflet";

// Fix for default Leaflet icon paths in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const MapMover = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location?.lat && location?.lng) {
      const targetLatLng = L.latLng(location.lat, location.lng);
      const targetPoint = map.project(targetLatLng, 15);

      const isDesktop = window.innerWidth >= 768;
      targetPoint.x += isDesktop ? 220 : 0;

      const centerLatLng = map.unproject(targetPoint, 15);
      map.flyTo(centerLatLng, 15, { duration: 1.5 });
    }
  }, [location, map]);
  return null;
};

const MarkerWithPopup = ({ location, position }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (markerRef.current) {
      markerRef.current.closePopup();
      timeout = setTimeout(() => {
        if (markerRef.current) {
          markerRef.current.openPopup();
        }
      }, 1400);
    }
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <Marker position={position} ref={markerRef}>
      <Popup closeButton={false} autoClose={false} closeOnClick={false}>
        <div className="text-center font-serif p-1 w-48">
          <strong className="text-giget-blue text-base font-bold mb-1 block">
            {location.id === 'marseille' ? 'Siège' : 'Agence'} {location.label.split(' ')[0]}
          </strong>
          <span className="text-sm text-slate-500 block leading-relaxed font-sans mt-2">
            {location.address}
          </span>
        </div>
      </Popup>
    </Marker>
  );
};

const Map = ({ location }) => {
  if (!location?.lat || !location?.lng) return null;
  const position = [location.lat, location.lng];

  return (
    <div className="absolute inset-0 z-0 w-full h-full bg-slate-200">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <LayersControl position="bottomleft">
          <LayersControl.BaseLayer checked name="OpenStreetMap Détillé">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Carto Light Épuré">
            <TileLayer
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <MarkerWithPopup location={location} position={position} />
        <MapMover location={location} />
      </MapContainer>
    </div>
  );
};

export default Map;
