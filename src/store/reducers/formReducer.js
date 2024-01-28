const isRequired = 'Поле обязательно для заполнения';

export const initialValues = {
    base: {
        value: '',
        error: isRequired,
    },
    code: {
        value: '',
        error: isRequired,
    },
    history: [''],
    isSubmitted: false,
};

export const formReducer = (state, {type, payload}) => {
    let history;

    switch (type) {
        case 'set_base':
            return {
                ...state,
                base: {
                    value: payload.value,
                    error: payload.value ? '' : isRequired,
                },
            };
        case 'set_code':
            return {
                ...state,
                code: {
                    value: payload.value,
                    error: payload.value ? '' : isRequired,
                },
            };
        case 'set_history':
            history = state.history;
            history[payload.i] = payload.value;

            return {
                ...state,
                history,
            };
        case 'set_submitted': {
            return {...state, isSubmitted: true};
        }
        case 'reset':
            return initialValues;
        default:
            return {...state};
    }
};
