import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/** Разница курса валют. */
export const CurrencyDiff = React.memo(({diff = ''}) => {
    const isPositive = parseFloat(diff, 10) >= 0;

    return <div className={`currency-diff ${isPositive ? 'green' : 'red'}`}>{diff}</div>;
});

CurrencyDiff.propTypes = {
    diff: PropTypes.string.isRequired,
};

CurrencyDiff.displayName = 'CurrencyDiff';
