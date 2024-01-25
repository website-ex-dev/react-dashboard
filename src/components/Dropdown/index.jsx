import React, {useRef, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../context/ThemeContext';
import './styles.scss';

export const Dropdown = ({button, children, className = '', position = 'left', triggerOnClick = false}) => {
    const theme = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    const refDropdown = useRef(null);
    const refContent = useRef(null);
    const show = () => !isVisible && setIsVisible(true);
    const hide = () => setIsVisible(false);
    const toggle = () => setIsVisible(!isVisible);
    const stopPropagation = (e) => e.stopPropagation();
    const openedClass = isVisible ? 'dropdown_opened' : '';
    const positionStyle = position === 'right' ? {right: 0} : {left: 0};

    return (
        <div
            className={`dropdown ${theme.color} ${theme.tone} ${openedClass} ${className}`}
            onClick={stopPropagation}
            onMouseOver={!triggerOnClick ? show : undefined}
            onMouseLeave={!triggerOnClick ? hide : undefined}
            ref={refDropdown}
        >
            <div className="dropdown-button" onClick={triggerOnClick ? toggle : undefined}>
                {button}
            </div>
            {isVisible && (
                <div id="dropdown" className="dropdown-content" style={{...positionStyle}} ref={refContent}>
                    {children}
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    button: PropTypes.elementType.isRequired,
    children: PropTypes.elementType.isRequired,
    className: PropTypes.string,
    position: PropTypes.string,
    triggerOnClick: PropTypes.bool,
};

Dropdown.displayClass = 'Dropdown';
