'use client'

import React from 'react';
import Layout from '../layout';
import FvSection from '../components/Fv';
// 他のコンポーネントのインポート

const HomePage: React.FC = () => {
    return (
        <Layout>
            <FvSection />
            {/* 他のセクションコンポーネント */}
        </Layout>
    );
};

export default HomePage;