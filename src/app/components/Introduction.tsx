import React from 'react';
import Image from 'next/image';

const Introduction: React.FC = () => {
    return (
        <section className="intro">
            <div className="intro--top">
                <h2 className="intro--top--txt">大切なワンちゃんにはいつまでも<br /><span className="orange">元気</span>で<span className="orange">健康</span>でいてほしいですよね？</h2>
            </div>
            <div className="intro--middle">
                <p className="intro--middle--txt">あなたはドッグフードを、</p>
                <ul className="intro--middle--list">
                    <li className="intro--middle--list--item">国産だから</li>
                    <li className="intro--middle--list--item">値段が安いから</li>
                    <li className="intro--middle--list--item width-100">スーパーでよく見るから</li>
                    <li className="intro--middle--list--item width-100">ずっと同じものを与えているから</li>
                </ul>
                <p className="intro--middle--txt">などの理由で選んでいませんか？</p>
            </div>
            <div className="intro--bottom">
                <figure className="ears">
                    <Image 
                        src="/img/dog-ears-sweat.svg"
                        alt="犬耳"
                        width={79}
                        height={46}
                        loading="lazy"
                    />
                </figure>
                <span className="bbl">実は...</span>
                <figure className="illust">
                    <Image 
                        src="/img/attention-illust.svg"
                        alt="添加物が含まれたドッグフードの注意"
                        width={224}
                        height={130}
                        loading="lazy"
                    />
                </figure>
                <p className="intro--bottom--txt">
                    <span className="yellow">市販</span>で売られているドッグフードは<span className="yellow">安く大量</span>に作るために、<span className="yellow">食用には適さない</span>原材料が使われていたり、<span className="yellow">添加物</span>に対する基準が甘かったりとワンちゃんにとって危険な場合もあるんです。<br />
                    そのため、市販のものでも良いですがしっかりと栄養面、衛生面などの品質が良いものを見極めて購入するようにしましょう。
                </p>
                <picture className="woman">
                    <Image 
                        src="/img/dog_woman.webp"
                        alt="ペット栄養士"
                        width={109}
                        height={109}
                        loading="lazy"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Introduction;