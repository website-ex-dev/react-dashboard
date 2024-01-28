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
            return {...state, toCode: action.payload.code};
        case 'set_from_value':
            const fromValue = parseFloat(action.payload.value) || 1;

            return {...state, fromValue, toValue: fromValue * state.rates.rate};
        case 'set_rates': {
            const rate = parseFloat(action.payload.rates.rate);

            return {
                ...state,
                rates: {rate, rateReverse: parseFloat(action.payload.rates.rateReverse)},
                toValue: state.fromValue * rate,
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
