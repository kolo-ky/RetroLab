import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <section>
            <Link to={'/'}>Retro</Link>
            <Link to={'/tonality'}>Tonality</Link>
            <Link to={'/profile'}>Profile</Link>
        </section>
    );
};
