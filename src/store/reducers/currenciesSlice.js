import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GET} from '../../utils/httpUtils';

/** Получение списка валют. */
export const getCurrencies = createAsyncThunk('getCurrencies', async () => GET('currencies'));

/** Список валют. */
const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        // TODO не нужны
        currencies: [],
        currencyOptions: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrencies.fulfilled, (state, action) => {
            // TODO сортировка
            const currencyOptions = action.payload.items
                .map(({codeNumeric, name}) => ({label: name, value: codeNumeric}))
                .sort((a, b) => a.label.localeCompare(b.label));

            return {...state, currencyOptions, currencies: action.payload.items};
        });
    },
});

export default currenciesSlice.reducer;
