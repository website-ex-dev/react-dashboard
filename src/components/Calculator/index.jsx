import React, {useEffect, useContext, useReducer} from 'react';
import {useSelector} from 'react-redux';
import {ThemeContext} from '../../context/ThemeContext';
import {CurrencyButtons} from '../CurrencyButtons';
import Reverse from '../../assets/img/Reverse';
import {calculatorReducer, initialValues} from '../../store/reducers/calculatorReducer';
import {Input} from '../Form/Input';
import {selectLastRates} from '../../store/reducers/selectors';
import {getToday} from '../../utils/dateUtils';
import './index.scss';

/** Калькулятор валют. */
export const Calculator = () => {
    const theme = useContext(ThemeContext);
    const [form, dispatchForm] = useReducer(calculatorReducer, initialValues);
    const rateList = useSelector(selectLastRates);

    const findRate = (fromCode, toCode) => rateList.find(({code, base}) => fromCode === base && toCode === code);

    const getRates = (fromCode, toCode) => {
        const rate = findRate(fromCode, toCode);
        const rateReverse = findRate(toCode, fromCode);

        if (rate && rateReverse) {
            return {rate: rate.rate, rateReverse: rateReverse.rate};
        }

        return {rate: '0', rateReverse: '0'};
    };

    useEffect(() => {
        const rates = getRates(form.fromCode, form.toCode);

        if (rates) {
            dispatchForm({
                type: 'set_rates',
                payload: {rates},
            });
        }
    }, [rateList]);

    const onFromCodeChange = (code) => {
        dispatchForm({type: 'set_from_code', payload: {code}});
        dispatchForm({type: 'set_rates', payload: {rates: getRates(code, form.toCode)}});
    };

    const onToCodeChange = (code) => {
        dispatchForm({type: 'set_to_code', payload: {code}});
        dispatchForm({type: 'set_rates', payload: {rates: getRates(code, form.toCode)}});
    };

    const onInputChange = (value) => {
        dispatchForm({type: 'set_from_value', payload: {value}});
    };

    const onReverse = () => {
        dispatchForm({type: 'reverse'});
    };

    return (
        <article className={`calculator ${theme.tone}`}>
            <time className="date">{getToday()}</time>
            <div className="form">
                <div className="form-buttons">
                    <CurrencyButtons value={form.fromCode} onChange={onFromCodeChange} />
                    <div>
                        <Input maxLength={10} value={form.fromValue} onChange={onInputChange} readonly />
                        <span className="single-rate">{`1 ${form.fromCode} = ${form.rates.rate} ${form.toCode}`}</span>
                    </div>
                    <button aria-label="button" className="button icon button-reverse" onClick={onReverse} type="button">
                        <Reverse />
                    </button>
                    <CurrencyButtons value={form.toCode} onChange={onToCodeChange} />
                    <div>
                        <Input maxLength={10} value={form.toValue} readonly />
                        <span className="single-rate">{`1 ${form.toCode} = ${form.rates.rateReverse} ${form.fromCode}`}</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

Calculator.displayName = 'Calculator';
