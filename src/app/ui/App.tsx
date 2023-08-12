import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/index.scss';
import { Menu } from 'wiggets/ui';
import { AppRoutes } from 'shared/route';

export const App = () => {
    return (
        <section>
            <Menu/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(AppRoutes).map(({ path, element }) => (
                        <Route path={path} element={element} key={path}/>
                    ))}
                </Routes>
            </Suspense>
        </section>
    );
};
