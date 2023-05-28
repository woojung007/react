import React from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import { DarkModeProvider } from '../context/DarkModeContext';

export default function Theme() {
    return (
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    );
}
