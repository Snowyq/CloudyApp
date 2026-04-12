# WeatherApp

A weather app built with React and Vite. This is a portfolio project that focuses on real API work, solid Redux Toolkit state management, and a clean, responsive UI.

## Why this project

- Real-world API integration with async data flow
- Clear feature-based structure and reusable UI
- Predictable routing with data loading
- Interactive map with weather layers

## Key features

- Location search with autocomplete (geocoding)
- Current, hourly, and daily forecast + alerts
- Favorite locations stored in localStorage
- Interactive map (Leaflet) with OpenWeather layers
- Toasts for user feedback
- Responsive grid of weather blocks

## End-to-end flow

1) User types at least 3 characters in the search box
2) `searchSlice` runs `fetchResults` with `AbortController` and queries MapTiler
3) Selecting a location navigates to `/app/weather/current/:locationId`
4) Route loader fetches location details and dispatches `fetchWeather`
5) `weatherSlice` stores OpenWeather One Call data and UI renders blocks

## Structure

- `src/features` - feature modules (weather, search, locations, sidebar)
- `src/services` - API clients (OpenWeather, MapTiler)
- `src/ui` - shared UI and layout components
- `src/store.js` - Redux setup and favorites persistence

## State management (Redux Toolkit)

- `createSlice` per feature
- `createAsyncThunk` for async fetches
- selectors and `reselect` for derived data
- favorites saved and restored from localStorage

## APIs and integrations

- OpenWeather One Call API: current, hourly, daily, alerts
- OpenWeather Map Tiles: temperature, clouds, pressure, rain, wind
- MapTiler Geocoding API: search and lookup by id
- React-Leaflet: map and interactive layers

## UX notes

- Sidebar with saved locations and edit mode
- Fast add/remove with toast feedback
- Clear block layout for data density
- Built for mobile and desktop

## Environment setup

Create a `.env` file with the following variables:

```
VITE_WEATHER_API_KEY=your_openweather_key
VITE_GEOLOCATION_API_KEY=your_maptiler_key
```

## Local run

```
npm install
npm run dev
```

## Scripts

- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run preview` - preview build
- `npm run lint` - lint

## Next ideas

- Cache results to reduce API limits
- More empty and error states in the UI
- Component tests (RTL) and store tests (RTK)
- Standardize API keys in `.env`
