import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../context/ThemeContext';
import logo from '../../assets/img/Logo.png';
import {Avatar} from '../../assets/img/Avatar';
import {HeaderThemeButton} from '../HeaderThemeButton';
import './styles.scss';

/** Хедер страницы. */
export const Header = ({onThemeChange}) => {
    const theme = useContext(ThemeContext);

    return (
        <header className={`header-layout ${theme.color} ${theme.tone}`}>
            <a href="/">
                <img src={logo} alt="Логотип" height={25} />
            </a>
            <div className="header-controls">
                <HeaderThemeButton onThemeChange={onThemeChange} />
                <Avatar />
            </div>
        </header>
    );
};

Header.propTypes = {
    onThemeChange: PropTypes.func.isRequired,
};

Header.displayName = 'Header';
