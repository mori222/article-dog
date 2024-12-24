import React from 'react';
import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
