import React from 'react';

export const themes = {
    lightRed: {
        color: 'red',
        tone: 'light',
        title: 'Светло-красная',
        rgbColor: 'rgba(198,40,40,1)',
        rgbColor1: 'rgba(255,213,8,1)',
    },
    darkRed: {
        color: 'red',
        tone: 'dark',
        title: 'Темно-красная',
        rgbColor: 'rgba(198,40,40,1)',
        rgbColor1: 'rgba(255,213,8,1)',
    },
    lightGreen: {
        color: 'green',
        tone: 'light',
        title: 'Светло-зеленая',
        rgbColor: 'rgba(71,207,115,1)',
        rgbColor1: 'rgba(141,231,11,1)',
    },
    darkGreen: {
        color: 'green',
        tone: 'dark',
        title: 'Темно-зеленая',
        rgbColor: 'rgba(71,207,115,1)',
        rgbColor1: 'rgba(141,231,11,1)',
    },
    lightBlue: {
        color: 'blue',
        tone: 'light',
        title: 'Светло-синяя',
        rgbColor: 'rgba(2,168,244,1)',
        rgbColor1: 'rgba(4,101,213,1)',
    },

    darkBlue: {
        color: 'blue',
        tone: 'dark',
        title: 'Темно-синяя',
        rgbColor: 'rgba(2,168,244,1)',
        rgbColor1: 'rgba(4,101,213,1)',
    },
};

export const ThemeContext = React.createContext(themes.darkBlue);
