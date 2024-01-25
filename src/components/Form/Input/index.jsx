import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../../context/ThemeContext';
import './styles.scss';

/** Текстовый инпут. */
export const Input = ({value, onChange, maxLength = 500, readonly, width = 150}) => {
    const theme = useContext(ThemeContext);
    const onInputChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <input
            className={`input ${theme.tone} ${theme.color}`}
            maxLength={maxLength}
            readOnly={readonly}
            type="text"
            value={value}
            onChange={onInputChange}
            style={{width}}
        />
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    maxLength: PropTypes.string,
    readonly: PropTypes.bool,
    width: PropTypes.string,
};

Input.displayName = 'Input';
