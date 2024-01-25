import {lastRates} from './rates';
import {getServicesDate} from '../../utils/dateUtils'; // TODO name

const HISTORY_LENGTH = 100;

const getRate = (baseCurr, codeCurr) => lastRates.items.find(({base, code}) => base === baseCurr && code === codeCurr).rate;

const getRandomValues = (rate) => {
    const rateNum = parseFloat(rate, 10);

    return [...Array(HISTORY_LENGTH).keys()].map(() => (Math.random() * 20 + rateNum).toFixed(1));
};

const dates = [...Array(HISTORY_LENGTH).keys()].map((i) => {
    const today = new Date();

    return getServicesDate(today.setDate(today.getDate() - i));
});

export const historyRates = ({base, code}) => ({
    y: `${base}/${code}`,
    dates,
    series: [{name: `${base}/${code}`, values: getRandomValues(getRate(base, code))}],
});
