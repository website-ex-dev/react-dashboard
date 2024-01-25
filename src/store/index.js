import {configureStore} from '@reduxjs/toolkit';
import ratesReducer from './reducers/ratesSlice';
import currenciesReducer from './reducers/currenciesSlice';
import historyReducer from './reducers/historySlice';

export const store = configureStore({
    reducer: {
        lastRates: ratesReducer,
        currencies: currenciesReducer,
        history: historyReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
