import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage, ProfilePage, TonalityPage} from "pages/ui";
import '../styles/index.scss';
import {Menu} from "wiggets/ui";

export const App = () => {
    return (
        <section>
            <Menu/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/tonality'} element={<TonalityPage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                </Routes>
            </Suspense>
        </section>
    );
};
