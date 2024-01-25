import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/** Компонент формы. */
export const FormField = ({label, id, error, children}) => {
    return (
        <div className="form-field">
            {label && (
                <label htmlFor={id} className="label">
                    {label}
                </label>
            )}
            <div className="component">
                {children}
                {error && <span className="error">{error}</span>}
            </div>
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
    children: PropTypes.node.isRequired,
};

FormField.displayName = 'FormField';
