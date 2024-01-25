import React, {useContext, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {ThemeContext} from '../../context/ThemeContext';
import {selectTableRates} from '../../store/reducers/selectors';
import {CurrencyDiff} from '../CurrencyDiff';
import './styles.scss';

/** Список курсов валют. */
export const CurrenciesTable = () => {
    const theme = useContext(ThemeContext);
    const rates = useSelector(selectTableRates);

    const renderRows = useMemo(
        () =>
            rates.map(({base, code, rate, diff, rateBuy}) => (
                <tr key={`${base}/${code}`}>
                    <td className="pair">{`${base}/${code}`}</td>
                    <td>{rate}</td>
                    <td>{rateBuy}</td>
                    <td>
                        <CurrencyDiff aria-label="grid-cell" diff={diff} />
                    </td>
                </tr>
            )),
        [rates],
    );

    return (
        <article className={`currencies-table ${theme.tone}`}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Валютная пара</th>
                        <th>Продажа</th>
                        <th>Покупка</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{renderRows}</tbody>
            </table>
        </article>
    );
};

CurrenciesTable.displayName = 'CurrenciesTable';
