import React, {useState, Suspense, lazy} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ThemeContext, themes} from './context/ThemeContext';
import {Header} from './components/Header';
import Dashboard from './pages/Dashboard';
import {store} from './store';
import './index.scss';

const Settings = lazy(() => import('./pages/Settings'));

const App = () => {
    const initTheme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : themes.darkBlue;

    const [theme, setTheme] = useState(initTheme);

    const onThemeChange = (theme) => {
        localStorage.setItem('theme', JSON.stringify(theme));
        setTheme(theme);
    };

    return (
        <div className={`app ${theme.tone}`}>
            <Provider store={store}>
                <ThemeContext.Provider value={theme}>
                    <Header onThemeChange={onThemeChange} />
                    <Suspense fallback={<div />}>
                        <main className={`main ${theme.tone}`}>
                            <BrowserRouter>
                                <Routes>
                                    <Route key="dashboard" path="/" element={<Dashboard />} />
                                    <Route key="settings" path="/settings/:widgetType" element={<Settings />} />
                                </Routes>
                            </BrowserRouter>
                        </main>
                    </Suspense>
                </ThemeContext.Provider>
            </Provider>
        </div>
    );
};

App.displayName = 'App';

export default App;
