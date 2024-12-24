import React from 'react';
import { RankingItemType } from './types';
import Image from 'next/image';

type IconType = 'dobble-circle' | 'circle' | 'triangle' | 'batsu';

const EvaluationIcon: React.FC<{ type: IconType }> = ({ type }) => {
    const iconMap = {
        'dobble-circle': '/img/dobble-circle.svg',
        'circle': '/img/circle.svg',
        'triangle': '/img/triangle.svg',
        'batsu': '/img/batsu.svg'
    };

    return (
        <figure className="evaluation">
            <Image 
                src={iconMap[type] || iconMap['batsu']} 
                alt={type === 'dobble-circle' ? '◎' : type === 'circle' ? '○' : type === 'triangle' ? '△' : '×'} 
                loading="lazy" 
                width={25} 
                height={25} 
            />
        </figure>
    );
};

const RankingItem: React.FC<RankingItemType> = ({
    rank,
    name,
    badgeImage,
    productImage,
    url,
    rating,
    campaign,
    price,
    ageAndBreed,
    features,
    materials,
    humanGrade,
    allergyMeasures,
    tearStains,
    coat,
    palatability,
    mainIngredients
}) => {
    const getBgClass = (rank: number) => {
        if (rank === 1) return 'bg-gold';
        if (rank === 2) return 'bg-silver';
        if (rank === 3) return 'bg-copper';
        return 'bg-pink';
    };

    return (
        <li className={`table--content--rank--item ${rank === 1 ? 'no1' : `rank-${rank}`}`}>
            {badgeImage && (
                <figure className="badge">
                    <Image 
                        src={badgeImage} 
                        alt={`${rank}位`} 
                        width={33.78} 
                        height={30.86} 
                        loading="lazy" 
                    />
                </figure>
            )}
            <h3 className={`name ${getBgClass(rank)}`}>
                <span>{name}</span>
            </h3>

            <div className="btn">
                <picture className="ranking-fv">
                    <Image 
                        src={productImage} 
                        alt={`ドッグフード${rank}のFV`} 
                        width={110} 
                        height={75} 
                        loading="lazy" 
                    />
                </picture>
                <a href={url} className="rankign-cta bold">公式サイト</a>
            </div>

            <dl className="star">
                <dt className="bg-pink-2 bold">総合評価</dt>
                <dd className="left second">
                    <p>{rating}</p>
                </dd>
            </dl>

            <dl className="campaign">
                <dt className="bg-pink-2 bold">キャンペーン</dt>
                <dd className="left second">
                    <p>{campaign.text}
                        {campaign.note && <br />}<span className="note">{campaign.note}</span>
                    </p>
                </dd>
            </dl>

            <dl className="price">
                <dt className="bg-pink-2 bold">初回価格</dt>
                <dd>
                    <span className="bold">
                        {price.original && (
                            <><span className="before">{price.original}円<span className="tax">(税込)</span></span><br /></>
                        )}
                        <span className="font-en">{price.current}</span>円<span className="tax">(税込)</span>
                    </span>
                </dd>
            </dl>

            {/* 評価項目のDLリスト */}
            <dl className="age">
                <dt className="bg-pink-2 bold">年齢・犬種</dt>
                <dd>
                    <EvaluationIcon type={ageAndBreed.evaluation} />
                    <p className="txt">{ageAndBreed.text}</p>
                </dd>
            </dl>

            {/* 特徴 */}
            <dl className="feature">
                <dt className="bg-pink-2 bold">特徴</dt>
                <dd>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                        ))}
                    </ul>
                </dd>
            </dl>

            {/* その他の評価項目 */}
            {/* ... 同��のパターンで他の評価項目も実装 ... */}

            <dl className="main-raw-material">
                <dt className="bg-pink-2 bold">主原料</dt>
                <dd>
                    <p className="text-left">{mainIngredients}</p>
                </dd>
            </dl>

            <div className="btn btn-wrap">
                <a href={`#${name.toLowerCase()}`} className="rankign-cta bold bg-pink-2">詳細を見る</a>
                <a href={url} className="rankign-cta bold">公式サイト</a>
            </div>
        </li>
    );
};

export default RankingItem;