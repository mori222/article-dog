import React from 'react';

const TableHeader: React.FC = () => {
    return (
        <h2 className="table--ttl section-title">
            <p className="sub">
                <span className="dog">チワワ</span>におすすめの
            </p>
            <p className="main">
                ドッグフード<span className="pink-2"><span className="font-en">5</span>選</span>
            </p>
        </h2>
    );
};

export default TableHeader;