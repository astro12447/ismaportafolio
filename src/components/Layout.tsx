import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
//import { useLocation } from 'react-router-dom';
interface LayoutProps {
    children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='Layout'>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
