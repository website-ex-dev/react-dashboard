import React, {useContext, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from '../Dropdown';
import {ThemeContext, themes} from '../../context/ThemeContext';
import {SunFillIcon} from '../../assets/img/SunFillIcon';
import {MoonFillIcon} from '../../assets/img/MoonFillIcon';
import './styles.scss';

/** Кнопка переключения тем. */
export const HeaderThemeButton = ({onThemeChange}) => {
    const theme = useContext(ThemeContext);

    const renderButton = useMemo(
        () => (
            <button className="button icon" type="button">
                {theme.tone === 'light' ? <SunFillIcon color="#fff" /> : <MoonFillIcon color="#fff" />}
            </button>
        ),
        [theme],
    );

    const renderMenuItems = () =>
        Object.keys(themes).map((key) => (
            <span className="theme-item" key={key} onClick={() => onThemeChange(themes[key])} title={themes[key].title}>
                {themes[key].tone === 'light' ? (
                    <SunFillIcon color={themes[key].rgbColor} />
                ) : (
                    <MoonFillIcon color={themes[key].rgbColor} />
                )}
            </span>
        ));

    return (
        <Dropdown button={renderButton} position="right" triggerOnClick={false}>
            <div className={`theme-dropdown ${theme.tone}`}>{renderMenuItems()}</div>
        </Dropdown>
    );
};

HeaderThemeButton.propTypes = {
    onThemeChange: PropTypes.func.isRequired,
};

HeaderThemeButton.displayName = 'HeaderThemeButton';
