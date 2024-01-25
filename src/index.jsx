import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const enableMocking = async () => {
    if (process.env.NODE_ENV === 'development') {
        const {worker} = await import('./mocks/browser');

        return worker.start();
    }

    return {};
};

const rootElement = createRoot(document.getElementById('root'));

enableMocking().then(() => {
    rootElement.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
