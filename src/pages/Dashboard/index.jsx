import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {CurrenciesChart} from '../../components/CurrenciesChart';
import {Currencies} from '../../components/Currencies';
import {CurrenciesTable} from '../../components/CurrenciesTable';
import {Calculator} from '../../components/Calculator';
import {getCurrencies} from '../../store/reducers/currenciesSlice';
import {getLastRates} from '../../store/reducers/ratesSlice';
import './styles.scss';

/** Дашборд. */
const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrencies());
        dispatch(getLastRates());
    }, []);

    return (
        <section className="dashboard">
            <Currencies />
            <CurrenciesChart />
            <CurrenciesTable />
            <Calculator />
        </section>
    );
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
