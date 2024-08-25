import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { getPosition } from '../weatherSlice';
import WeatherBlock from './WeatherBlock';
import { useSelector } from 'react-redux';
import { LayersControl, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
function MapBlock() {
  const position = useSelector(getPosition);
  const API_KEY = `b837aa8344ea4fe8dffff42cbb8a079a`;

  return (
    <WeatherBlock className='col-span-2 row-span-2'>
      <div className='h-full w-full px-0 py-0.5'>
        <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-md'>
          <MapContainer
            center={position}
            zoom={10}
            scrollWheelZoom={false}
            minZoom={6}
            maxZoom={15}
            className='h-full w-full'
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <LayersControl position='topright'>
              <LayersControl.BaseLayer name='Temperature'>
                <TileLayer
                  url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                  attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name='Clouds'>
                <TileLayer
                  url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                  attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name='Pressure'>
                <TileLayer
                  url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                  attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name='Precipitation'>
                <TileLayer
                  url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                  attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name='Wind'>
                <TileLayer
                  url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                  attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name='Clear Map' checked='Clear Map'>
                <TileLayer
                  url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                  attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                />
              </LayersControl.BaseLayer>
            </LayersControl>
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </WeatherBlock>
  );
}

export default MapBlock;
