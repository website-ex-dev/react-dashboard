import {DEFAULT_CODES} from '../../consts';

/** Последние курсы валют. */ // TODO  название
export const selectLastRates = (state) => state.lastRates.lastRates;

/** Курсы валют для таблицы. */
export const selectTableRates = (state) =>
    [...state.lastRates.lastRates].filter(({code, base}) => code !== base).sort((a, b) => parseFloat(a.diff) - parseFloat(b.diff));

export const selectRateWidgetConfig = (state) => state.lastRates.rateWidgetConfig;

/** Список валют. */
export const selectCurrencies = (state) => state.currencies.currencies;

/** Cписок валют для селекта. */
export const selectCurrencyOptions = (state) => state.currencies.currencyOptions;

/** Список валют для калькулятора валют. */
export const selectCalcCurrencies = (state) => state.currencies.currencies.filter(({code}) => !DEFAULT_CODES.includes(code)) || [];

/** Исторические курсы валют. */
export const selectHistory = (state) => state.history.history;

/** Редактируемый виджет. */
export const selectEditWidget = (state) => state.lastRates.editWidget;
