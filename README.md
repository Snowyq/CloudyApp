# WeatherApp

Interactive weather dashboard focused on clarity and real-world data. React handles UI while Redux Toolkit manages state and async API flow.

## Live Demo

https://weather-app-steel-delta-30.vercel.app/

## Features

- Location search with geocoding autocomplete
- Current, hourly, and daily forecast with alerts
- Favorites persisted to localStorage
- Interactive map with weather layers
- Toast feedback and responsive layout

## Tech Stack

- React 18, Vite, React Router
- Redux Toolkit + Reselect
- Tailwind CSS
- React-Leaflet + MapTiler
- OpenWeather APIs

## Setup

Create a `.env` file in the project root:

```
VITE_WEATHER_API_KEY=your_openweather_key
VITE_GEOLOCATION_API_KEY=your_maptiler_key
```

Install and run:

```
npm install
npm run dev
```

## Notes

- Search requests are abortable to avoid race conditions
- Map layers include temperature, clouds, pressure, rain, and wind
- UI is organized into reusable weather blocks for data density

## License

MIT
