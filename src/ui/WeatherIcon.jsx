import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayHail,
  WiDaySunny,
  WiHail,
  WiStormShowers,
} from 'react-icons/wi';

const iconMap = {
  '01d': WiDaySunny,
  '02d': WiDayCloudy,
  '03d': WiCloud,
  '04d': WiCloudy,
  '04n': WiCloudy,
  '09d': WiHail,
  '10d': WiDayHail,
  '11d': WiStormShowers,
};

function WeatherIcon({ iconId, className }) {
  const IconComponent = iconMap[iconId] || null;
  return IconComponent ? <IconComponent className={className} /> : null;
}

export default WeatherIcon;
