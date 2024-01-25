import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../../context/ThemeContext';
import './styles.scss';

/** Текстовый инпут. */
export const Input = ({value = '', onChange, maxLength = 500, readonly, width = 150}) => {
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
            value={value.toString()}
            onChange={onInputChange}
            style={{width}}
        />
    );
};

Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
    readonly: PropTypes.bool,
    width: PropTypes.string,
};

Input.displayName = 'Input';
