# WeatherApp

Aplikacja pogodowa w React (Vite), zrobiona jako projekt portfolio. Pokazuje praktyczna prace z API, zarzadzanie stanem w Redux Toolkit i modularna architekture front-endu z naciskiem na czytelne, responsywne UI.

## Cel projektu (portfolio)

- Integracja z zewnetrznymi API i obsluga asynchronicznych zapytan
- Sprawna organizacja stanu aplikacji w Redux Toolkit
- Czytelny podzial na feature modules i reusable UI
- Routing z loaderem danych i przewidywalny przeplyw danych
- Praca z mapa i warstwami pogodowymi

## Najwazniejsze funkcje

- Wyszukiwanie lokalizacji z podpowiedziami (geocoding)
- Widok pogody biezacej, godzinowej i dziennej + alerty
- Zapisywanie ulubionych lokalizacji i ich edycja w sidebarze (localStorage)
- Interaktywna mapa (Leaflet) z warstwami pogodowymi OpenWeather
- Powiadomienia o akcjach uzytkownika (toasty)
- Responsywny uklad z blokami pogodowymi

## Przeplyw danych end-to-end

1) Uzytkownik wpisuje min. 3 znaki w wyszukiwarce
2) `searchSlice` odpala `fetchResults` z `AbortController` i pobiera wyniki z MapTiler
3) Wybor lokalizacji prowadzi do trasy `/app/weather/current/:locationId`
4) Loader pobiera szczegoly lokalizacji po `id` i dispatchuje `fetchWeather`
5) `weatherSlice` zapisuje dane z OpenWeather One Call, a UI renderuje bloki

## Architektura i struktura

- `src/features` - moduly funkcjonalne (weather, search, locations, sidebar)
- `src/services` - klienci API (OpenWeather, MapTiler)
- `src/ui` - komponenty wspolne i layout
- `src/store.js` - konfiguracja Redux i zapis ulubionych do localStorage

## Zarzadzanie stanem (Redux Toolkit)

- `createSlice` dla kazdego modułu
- `createAsyncThunk` do pobierania danych
- selektory i `reselect` do danych pochodnych (np. lista godzin + wschod/zachod)
- zapis i odczyt ulubionych lokalizacji z localStorage

## API i integracje

- OpenWeather One Call API: biezaca, godzinowa i dzienna prognoza + alerty
- OpenWeather Map Tiles: warstwy temperature, chmury, cisnienie, opady, wiatr
- MapTiler Geocoding API: wyszukiwanie i lookup lokalizacji po id
- React-Leaflet: mapa oraz interaktywne warstwy

## UX i interakcje

- Sidebar z lista lokalizacji i trybem edycji
- Szybkie dodawanie/usuwanie lokalizacji z feedbackiem (toasty)
- Klarowny podzial na bloki pogodowe w siatce
- UI zbudowane pod mobile i desktop

## Konfiguracja srodowiska

Wymagane zmienne srodowiskowe w pliku `.env`:

```
VITE_WEATHER_API_KEY=twoj_klucz_openweather
VITE_GEOLOCATION_API_KEY=twoj_klucz_maptiler
```

## Uruchomienie lokalne

```
npm install
npm run dev
```

## Skrypty

- `npm run dev` - lokalny serwer developerski
- `npm run build` - build produkcyjny
- `npm run preview` - podglad builda
- `npm run lint` - lint

## Pomysly na dalszy rozwoj

- Cache wynikow i ochrona przed limitami API
- Dokladniejsze stany bledow i puste stany dla UI
- Testy komponentow (RTL) i store (RTK)
- Ujednolicenie kluczy API (np. mapy) w `.env`
