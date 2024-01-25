import React, {useContext, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {DotsMenu} from '../DotsMenu';
import {ThemeContext} from '../../context/ThemeContext';
import {setEditWidget} from '../../store/reducers/ratesSlice';
import {CurrencyDiff} from '../CurrencyDiff';
import {getToday} from '../../utils/dateUtils';
import './styles.scss';

/** Виджет для курса валюты. */
export const RateWidget = ({values, active, isSelected}) => {
    const {id, code, base, value, editable, diff} = values;
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirectSettings = () => {
        dispatch(setEditWidget({id}));
        navigate('/settings/rates/');
    };

    const onWidgetClick = () => {
        if (isSelected) {
            dispatch(setEditWidget({id}));
        }
    };

    const menuItems = useMemo(() => {
        if (editable) {
            return [{type: 'edit', onClick: redirectSettings}];
        }

        return [];
    }, [values]);

    return (
        <article className={`rate-widget ${theme.tone} ${theme.color} ${active && isSelected ? 'active' : ''}`} onClick={onWidgetClick}>
            <header className={`header ${theme.tone} ${theme.color}`}>{!!menuItems.length && <DotsMenu items={menuItems} />}</header>
            <div className="content">
                <div className="currency currency-color">
                    <span title={base}>{base}</span>
                    <span>/</span>
                    <span title={code}>{code}</span>
                </div>
                <time className="date">{getToday()}</time>
                <div className="rate">
                    <span className="value">{value}</span>
                    <CurrencyDiff diff={diff} />
                </div>
            </div>
        </article>
    );
};

RateWidget.propTypes = {
    values: PropTypes.shape({
        id: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        base: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        editable: PropTypes.bool.isRequired,
        diff: PropTypes.string.isRequired,
    }).isRequired,
    active: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool,
};

RateWidget.displayName = 'RateWidget';
