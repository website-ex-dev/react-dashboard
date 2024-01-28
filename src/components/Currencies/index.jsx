import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {selectEditWidget, selectRateWidgetConfig} from '../../store/reducers/selectors';
import {RateWidget} from '../RateWidget';
import './styles.scss';

/** Курсы валют. */
export const Currencies = ({hideMenu}) => {
    const lastRates = useSelector(selectRateWidgetConfig);
    const selected = useSelector(selectEditWidget);

    const renderWidgets = () =>
        lastRates.map((rate) => (
            <RateWidget
                key={rate.id}
                isSelected={hideMenu}
                values={hideMenu ? {...rate, editable: false} : rate}
                active={rate.id === selected.id}
            />
        ));

    return <section className="currencies">{renderWidgets()}</section>;
};

Currencies.propTypes = {
    hideMenu: PropTypes.bool,
};

Currencies.displayName = 'Currencies';
