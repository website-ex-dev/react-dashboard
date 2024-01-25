import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from '../Dropdown';
import {ThemeContext} from '../../context/ThemeContext';
import './styles.scss';

const DOTS_MENU_LABELS = {
    edit: 'Изменить',
    delete: 'Удалить',
    open: 'На всю страницу',
};

/** Меню виджета. */
export const DotsMenu = ({items = []}) => {
    const theme = useContext(ThemeContext);

    return (
        <Dropdown button={<span className={`dots ${theme.tone}`}>&#8942;</span>} position="right" triggerOnClick>
            <ul className="menu" style={{zIndex: 2000}}>
                {items.map(({type, onClick}) => (
                    <li className="menu-item" key={type} role="menuitem" onClick={onClick}>
                        {DOTS_MENU_LABELS[type]}
                    </li>
                ))}
            </ul>
        </Dropdown>
    );
};

DotsMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
        }),
    ).isRequired,
};

DotsMenu.displayName = 'DotsMenu';
