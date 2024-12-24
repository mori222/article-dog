import React from 'react';
import TableHeader from './TableHeader';
import RankingItem from './RankingItem';
import { rankingData } from './data';
import Image from 'next/image';
import { RankingItemType } from './types';

const Table: React.FC = () => {
    return (
        <section className="table" id="table">
            <TableHeader />
            
            <picture className="table--img">
                <Image 
                    src="/img/table-top-dog.webp" 
                    alt="チワワの画像" 
                    width={390} 
                    height={400} 
                    loading="lazy" 
                />
            </picture>

            <div className="scroll-arrow_wrap">
                <div className="container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>

            <div className="table--content">
                <ol className="table--content--rank">
                    {rankingData.map((item: RankingItemType, index: number) => (
                        <RankingItem key={index} {...item} />
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Table;