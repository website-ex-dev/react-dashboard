import React, {useContext, useReducer} from 'react';
import {useSelector} from 'react-redux';
import Select from 'react-select';
import {selectCurrencyOptions} from '../../store/reducers/selectors';
import {FormField} from '../Form/FormField';
import {ThemeContext} from '../../context/ThemeContext';
import {formReducer, initialValues} from '../../store/reducers/formReducer';
import './styles.scss';

/** Компонент для рейтинга валют. */
export const CurrenciesForm = (id) => {
    const theme = useContext(ThemeContext);
    const currencyOptions = useSelector(selectCurrencyOptions);
    const [form, onChange] = useReducer(formReducer, initialValues);

    const classNames = (error) => ({
        control: () => `select ${theme.tone} ${form.isSubmitted && error ? 'border-red' : ''}`,
    });

    const onBaseChange = (base) => onChange({type: 'set_base', payload: {value: base.value}});

    const onSubmit = () => {
        if (form.base.error || form.code.error) {
            onChange({type: 'set_submitted'});
        } else {
            console.log(form);
        }
    };

    return (
        <section className="currencies-form">
            <div className={`currencies-form-wrap ${theme.tone}`}>
                <FormField error={form.isSubmitted ? form.base.error : ''} label="Базовая валюта">
                    <Select
                        classNames={classNames(form.base.error)}
                        options={currencyOptions}
                        onChange={onBaseChange}
                        placeholder="Выберите..."
                        value={form.base.value}
                    />
                </FormField>
                <FormField error={form.isSubmitted ? form.code.error : ''} label="Валюта котировки">
                    <Select classNames={classNames(form.code.error)} options={currencyOptions} placeholder="Выберите..." />
                </FormField>
                <div className="buttons">
                    <button className={`button ${theme.color}`} onClick={onSubmit} type="button">
                        {id ? 'Изменить' : 'Добавить'}
                    </button>
                </div>
            </div>
        </section>
    );
};

CurrenciesForm.displayName = 'CurrenciesForm';
