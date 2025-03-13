import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import { baseApi } from './api/baseApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: "user",
  storage
};


const persistUserReducer = persistReducer(persistConfig, userReducer);


export const store = configureStore({
  reducer: {
    user: persistUserReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware), 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);