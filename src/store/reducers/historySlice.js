import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GET} from '../../utils/httpUtils';

/** Получение исторических курсов валют. */
export const getHistory = createAsyncThunk('getHistory', async (params) => GET('history', params));

/** Исторические валютные курсы. */
const historySlice = createSlice({
    name: 'history',
    initialState: {
        history: {y: '', dates: [], series: []},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHistory.fulfilled, (state, action) => {
            return {...state, history: action.payload};
        });
    },
});

export default historySlice.reducer;
