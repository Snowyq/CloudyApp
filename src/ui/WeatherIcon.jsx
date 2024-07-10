import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayFog,
  WiDayLightning,
  WiDayRain,
  WiDaySnow,
  WiDaySunny,
  WiNightClear,
  WiNightCloudy,
  WiNightFog,
  WiNightLightning,
  WiNightRain,
  WiNightSnow,
  WiRain,
} from 'react-icons/wi';
import { FiSunrise, FiSunset } from 'react-icons/fi';

const iconMap = {
  '01d': WiDaySunny,
  '02d': WiDayCloudy,
  '03d': WiCloud,
  '04d': WiCloudy,
  '09d': WiRain,
  '10d': WiDayRain,
  '11d': WiDayLightning,
  '13d': WiDaySnow,
  '50d': WiDayFog,
  '01n': WiNightClear,
  '02n': WiNightCloudy,
  '03n': WiCloud,
  '04n': WiCloudy,
  '09n': WiRain,
  '10n': WiNightRain,
  '11n': WiNightLightning,
  '13n': WiNightSnow,
  '50n': WiNightFog,
  sunset: FiSunset,
  sunrise: FiSunrise,
};

function WeatherIcon({ iconId, className }) {
  const IconComponent = iconMap[iconId] || null;
  return IconComponent ? <IconComponent className={className} /> : null;
}

export default WeatherIcon;
