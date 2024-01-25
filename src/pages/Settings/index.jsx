import React, {useContext, useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Currencies} from '../../components/Currencies';
import {CurrenciesForm} from '../../components/CurrenciesForm';
import {ThemeContext} from '../../context/ThemeContext';
import {getCurrencies} from '../../store/reducers/currenciesSlice';
import {getLastRates} from '../../store/reducers/ratesSlice';
import './styles.scss';

/** Компонент для настроек виджетов. */
const Settings = () => {
    const {widgetType} = useParams();
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrencies());
        dispatch(getLastRates());
    }, []);

    const renderWidget = () => {
        switch (widgetType) {
            case 'rates':
                return <Currencies hideMenu />;
            default:
                return null;
        }
    };

    const renderForm = () => {
        switch (widgetType) {
            case 'rates':
                return <CurrenciesForm />;
            default:
                return null;
        }
    };

    return (
        <section className={`settings ${theme.tone}`}>
            <header className="settings-header">
                <NavLink className="back-link" to="/">
                    Назад
                </NavLink>
            </header>
            <div className="settings-widget">{renderWidget()}</div>
            <div className="settings-form">{renderForm()}</div>
        </section>
    );
};

export default Settings;
