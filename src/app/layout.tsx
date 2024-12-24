import '../styles/css/reset.css';
import '../styles/css/style.css';

import React from 'react';
import Supervisor from './components/Supervisor';
import Introduction from './components/Introduction';
import Attention from './components/Attention';
import Table from './components/Table';
import Recommend from './components/Recommend';

import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="ja">
            <body>
                <div className="wrap">
                    <main>
                        <Supervisor />
                        <Introduction />
                        <Attention />
                        <Table />
                        <Recommend />
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default Layout;
