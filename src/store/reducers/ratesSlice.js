import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GET} from '../../utils/httpUtils';

/** Получение курсов валют на ближайшую дату. */
export const getLastRates = createAsyncThunk('getLastRates', async () => GET('rate/latest'));

/** Курсы валют на ближайшую дату. */
const ratesSlice = createSlice({
    name: 'rates',
    initialState: {
        lastRates: [],
        rateWidgetConfig: [
            {id: '1', base: 'USD', code: 'RUB', value: '', editable: false, diff: ''},
            {id: '2', base: 'EUR', code: 'RUB', value: '', editable: false, diff: ''},
            {id: '3', base: 'USD', code: 'EUR', value: '', editable: false, diff: ''},
            {id: '4', base: 'USD', code: 'CNY', value: '', editable: true, diff: ''},
            {id: '5', base: 'USD', code: 'JPY', value: '', editable: true, diff: ''},
            {id: '6', base: 'CNY', code: 'RUB', value: '', editable: true, diff: ''},
        ],
        editWidget: '4',
    },
    reducers: {
        setEditWidget: (state, {payload}) => {
            state.editWidget = payload.id;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getLastRates.fulfilled, (state, action) => {
            const rateWidgetConfig = state.rateWidgetConfig.map((config) => {
                const value = action.payload.items.find(({code, base}) => code === config.code && base === config.base);

                return {
                    ...config,
                    value: value ? value.rate : '',
                    diff: value ? value.diff : '',
                };
            });

            return {...state, rateWidgetConfig, lastRates: action.payload.items};
        });
    },
});

export const {setEditWidget} = ratesSlice.actions;

export default ratesSlice.reducer;
