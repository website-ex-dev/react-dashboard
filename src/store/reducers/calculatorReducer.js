export const initialValues = {
    fromCode: 'RUB',
    toCode: 'EUR',
    fromValue: 1,
    toValue: undefined,
    rates: {
        rate: 1,
        rateRevert: 1,
    },
};

export const calculatorReducer = (state, action) => {
    switch (action.type) {
        case 'set_from_code':
            return {...state, fromCode: action.payload.code};
        case 'set_to_code':
            return {...state, fromValue: 1, toCode: action.payload.code};
        case 'set_from_value':
            return {...state, fromValue: parseFloat(action.payload.value)};
        case 'set_to_value':
            return {...state, toValue: parseFloat(action.payload.value)};
        case 'set_rates': {
            return {
                ...state,
                rates: {rate: parseFloat(action.payload.rates.rate), rateReverse: parseFloat(action.payload.rates.rateReverse)},
            };
        }
        case 'reverse':
            const toCode = state.fromCode;
            const fromCode = state.toCode;
            const rateReverse = state.rates.rate;
            const rate = state.rates.rateReverse;

            return {...initialValues, toCode, fromCode, rates: {rateReverse, rate}};
        default:
            return {...state};
    }
};
