import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import {useSelector} from 'react-redux';
import Select from 'react-select';
import {selectCurrencyOptions, selectEditWidget} from '../../store/reducers/selectors';
import {FormField} from '../Form/FormField';
import {ThemeContext} from '../../context/ThemeContext';
import {formReducer, initialValues} from '../../store/reducers/formReducer';
import './styles.scss';

/** Компонент для рейтинга валют. */
export const CurrenciesForm = () => {
    const theme = useContext(ThemeContext);
    const currencyOptions = useSelector(selectCurrencyOptions);
    const selected = useSelector(selectEditWidget);

    const [form, onChange] = useReducer(formReducer, initialValues);

    useEffect(() => {
        onChange({type: 'set_base', payload: {value: selected.base}});
        onChange({type: 'set_code', payload: {value: selected.code}});
    }, [selected]);

    const classNames = (error) => ({
        control: () => `select ${theme.tone} ${form.isSubmitted && error ? 'border-red' : ''}`,
    });

    const onBaseChange = (base) => onChange({type: 'set_base', payload: {value: base.value}});

    const onSubmit = () => {
        if (form.base.error || form.code.error) {
            onChange({type: 'set_submitted'});
        }
    };

    const getValue = useCallback(
        (code) => currencyOptions.find(({value}) => value === code),
        [currencyOptions, form.base.value, form.code.value],
    );

    return (
        <section className="currencies-form">
            <div className={`currencies-form-wrap ${theme.tone}`}>
                <FormField error={form.isSubmitted ? form.base.error : ''} label="Базовая валюта">
                    <Select
                        classNames={classNames(form.base.error)}
                        options={currencyOptions}
                        onChange={onBaseChange}
                        placeholder="Выберите..."
                        value={getValue(form.base.value)}
                        isDisabled
                    />
                </FormField>
                <FormField error={form.isSubmitted ? form.code.error : ''} label="Валюта котировки">
                    <Select
                        classNames={classNames(form.code.error)}
                        options={currencyOptions}
                        placeholder="Выберите..."
                        value={getValue(form.code.value)}
                        isDisabled
                    />
                </FormField>
                <div className="buttons">
                    <button className={`button ${theme.color}`} onClick={onSubmit} type="button">
                        Изменить
                    </button>
                </div>
            </div>
        </section>
    );
};

CurrenciesForm.displayName = 'CurrenciesForm';
