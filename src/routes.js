import {lazy} from 'react';

export const currencyRoutes = [
    {
        name: 'dashboard',
        path: '/',
        title: 'Дашборд',
        component: lazy(() => import('./components/Dashboard')),
    },
    {
        name: 'settings',
        path: '/settings',
        title: 'Настройки',
        component: lazy(() => import('./components/CurrencyInfoSettings')),
    },
];
