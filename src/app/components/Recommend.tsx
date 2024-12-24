import React from 'react';
import Image from 'next/image';

const Recommend: React.FC = () => {
    return(
        <section className="reccomend">
            <h2 className="title">
                <p className="sub">迷ったときは...</p>
                <p className="main">1位の<span className="bg-yellow">うまか</span>がおすすめ！</p>
            </h2>
            <picture className="reccomend--img">
                <Image 
                    src="/img/umaka-fv.webp"
                    alt="obremo"
                    width={290}
                    height={200}
                    loading="lazy"
                />
            </picture>
            <p className="txt">
                犬の健康に役立つドッグフードをランキングで紹介しましたが、フード毎に特徴があるため愛犬にあったドッグフードを選んであげてください！<br /><br />
                迷ったときは、<span className="pink-2">ランキング1位の『うまか』がおすすめ</span>です。<br /><br />
                このドッグフードは、博多水たきの名店が味と品質にこだわってつくったものです。原料・素材を厳選し、栄養価を考えて製造されているこの商品、実は<span className="pink-2">人間でも美味しく食べられる新鮮な鶏肉を使用しています</span>。<br /><br />
                価格も通常価格が5,478円（税込）ですが、初めてご注文の方限定で<span className="pink-2">63％OFFの1,980円（税込）</span>でお買い求めいただけます。<br />
                さらに、2回目以降もずっと<span className="pink-2">10％OFFの4,930円(税込)</span>で購入できます。<br /><br />
                いつでも解約OKなので、ぜひ一袋試してみてください！
            </p>
            <div className="reccomend--btn btn-wrap">
                <a href="https://t.afi-b.com/visit.php?a=B10033T-N387625p&p=y881784e" className="detail--list--item--btn cv-btn cv-orange">
                    <p><span className="yellow">うまか</span><span className="small">を</span><span className="yellow">63%OFF</span><span className="small">で</span><br />購入<span className="small">するなら</span>コチラ</p>
                </a>
            </div>
        </section>
    );
};

export default Recommend;