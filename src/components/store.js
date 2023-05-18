import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  name: '',
  email: '',
};

// Create a slice using createSlice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

// Extract the reducer and actions from the slice
export const { setUser } = userSlice.actions;

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
