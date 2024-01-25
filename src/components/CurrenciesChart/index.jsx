import React, {useEffect, useState, useRef, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeContext} from '../../context/ThemeContext';
import LineChart from '../LineChart';
import {getHistory} from '../../store/reducers/historySlice';
import {selectHistory} from '../../store/reducers/selectors';
import {throttle} from '../../utils/utils';
import './styles.scss';

/** График курсов валют */
export const CurrenciesChart = () => {
    const [size, setSize] = useState({width: 500, height: 300});
    const chartRef = useRef(null);
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const history = useSelector(selectHistory);

    useEffect(() => {
        dispatch(getHistory({base: 'USD', code: 'RUB'}));
    }, []);

    useEffect(() => {
        const resizeListener = throttle(() => {
            if (chartRef.current) {
                const {width, height} = chartRef.current.getBoundingClientRect();

                setSize({width, height});
            }
        }, 150);

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return (
        <div className={`currency-chart ${theme.tone}`} ref={chartRef}>
            <LineChart data={history} width={size.width} height={size.height} />
        </div>
    );
};

CurrenciesChart.displayName = 'CurrenciesChart';
