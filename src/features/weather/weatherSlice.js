import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeather } from '../../services/apiWeather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async function () {
    // 1) We get the user's geolocation position
    // const positionObj = await getPosition();
    // const position = {
    //   latitude: positionObj.coords.latitude,
    //   longitude: positionObj.coords.longitude,
    // };
    const position = '';

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const weatherData = await getWeather(position);

    // 3) Then we return an object with the data that we are interested in
    return { position, weatherData };
  },
);

const initialState = {
  weatherData: {},
  error: '',
  status: 'idle',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // loadWeather(state, action) {
    //   state.weatherData = action.payload;
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload.weatherData;
        state.status = 'idle';
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        (state.status = 'error'),
          (state.error =
            'There was a problem getting your address. Make sure to fill this field');
      }),
});

export default weatherSlice.reducer;

export const { loadWeather } = weatherSlice.actions;

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       // payload = newItem
//       state.cart.push(action.payload);
//     },

//     deleteItem(state, action) {
//       //payload = pizzaId
//       state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
//     },

//     increaseItemQuantity(state, action) {
//       //payload = pizzaId
//       const item = state.cart.find(item => item.pizzaId === action.payload);
//       item.quantity++;
//       item.totalPrice = item.quantity * item.unitPrice;
//     },
//     decreaseItemQuantity(state, action) {
//       //payload = pizzaId
//       const item = state.cart.find(item => item.pizzaId === action.payload);
//       item.quantity--;
//       item.totalPrice = item.quantity * item.unitPrice;
//       if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
//     },
//     clearCart(state, action) {
//       state.cart = [];
//     },
//   },
// });

// export const {
//   addItem,
//   deleteItem,
//   increaseItemQuantity,
//   decreaseItemQuantity,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;

// // check 'reselect' library

// export const getCart = state => state.cart.cart;

// export const getTotalCartQuantity = state =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export const getTotalCartPrice = state =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// export const getCurrentQuantityById = id => state =>
//   state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
