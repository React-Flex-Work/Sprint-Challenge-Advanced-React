import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [dark, setDark] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDark(!dark);
    };
    return (
        <nav className="navbar">
            <h4>Turn Off The Lights</h4>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={dark ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;
