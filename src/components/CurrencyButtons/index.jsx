import React, {useContext, useMemo} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../context/ThemeContext';
import {Dropdown} from '../Dropdown';
import {selectCurrencies} from '../../store/reducers/selectors';
import {DEFAULT_CODES} from '../../consts';
import './styles.scss';

/** Кнопки выбора валюты. */
export const CurrencyButtons = ({onChange, value}) => {
    const theme = useContext(ThemeContext);

    const currencies = useSelector(selectCurrencies);

    const onChangeCode = (code) => () => onChange(code);

    const renderDropdownButton = () => (
        <button type="button" className={`button ${theme.tone} ${theme.color}`}>
            ...&nbsp;
        </button>
    );
    const renderCurrencyList = () =>
        currencies
            .filter(({code}) => !DEFAULT_CODES.includes(code))
            .map(({code}) => (
                <div
                    key={code}
                    className="currency-list-item"
                    role="button"
                    tabIndex={0}
                    onClick={onChangeCode(code)}
                    onKeyDown={onChangeCode(code)}
                >
                    {code}
                </div>
            ));

    const renderDefaultButtons = useMemo(
        () =>
            DEFAULT_CODES.map((code) => (
                <button
                    key={code}
                    type="button"
                    className={`button code ${theme.tone} ${theme.color} ${value === code ? 'active' : ''}`}
                    onClick={onChangeCode(code)}
                >
                    {code}
                </button>
            )),
        [theme, value],
    );

    return (
        <div className={`buttons-segmented ${theme.tone}`}>
            {renderDefaultButtons}
            <Dropdown button={renderDropdownButton()}>{renderCurrencyList()}</Dropdown>
        </div>
    );
};

CurrencyButtons.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

CurrencyButtons.displayName = 'CurrencyButtons';
