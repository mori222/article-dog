import React from 'react';
import Image from 'next/image';

const Attention: React.FC = () => {
    return (
        <section className="attention" id="attention">
            <h2 className="attention--ttl section-title">
                <p className="sub">値段だけで選んでませんか？</p>
                <p className="main">ドッグフード<span className="small">を</span>選ぶ<br />3つ<span className="small">の</span>ポイント</p>
            </h2>
            <div className="attention--content">
                <div className="attention--content--point">
                    <h3 className="point-ttl">粗悪な原料を避ける！</h3>
                    <picture>
                        <Image 
                            src="/img/attention-1.webp"
                            alt="ドッグフード"
                            width={274}
                            height={159}
                            loading="lazy"
                        />
                    </picture>
                    <p>
                        国産ドッグフードは日本国内で生産されるため、食品の<span className="bg-yellow">品質管理</span>や<span className="bg-yellow">安全基準</span>が厳格に守られていることが多いです。<br />
                        小型犬は涙やけに悩まされることが多い犬種ですが、輸送時に使われる<span className="bg-yellow">防腐剤</span>や<span className="bg-yellow">保存料</span>が引き起こす<span className="bg-yellow">食物アレルギー</span>が、その原因とも言われています…<br />
                        ですのでドッグフードを選ぶ際は以下2点のことに気をつけましょう！
                    </p>
                    <ul className="list">
                        <li>国産材料がどのくらいの割合で使用されいるか</li>
                        <li>無添加など良質な素材が使われているか</li>
                    </ul>
                </div>
                <div className="attention--content--point">
                    <h3 className="point-ttl point-2">ヒューマングレードのものを選ぶ！</h3>
                    <picture>
                        <Image 
                            src="/img/attention-2.webp"
                            alt="ドッグフード"
                            width={274}
                            height={159}
                            loading="lazy"
                        />
                    </picture>
                    <p>
                        ヒューマングレードとは「<span className="bg-yellow">人間が食べることのできる品質</span>」であることを意味します。<br />
                        タンパク質やビタミン、ミネラルが豊富で栄養バランスが良く、アレルギーや消化不良に配慮しているなど安全性を保証する指標の1つとなります。<br />
                        皮膚や被毛は日頃の食生活に大きく左右されるため、<span className="bg-yellow">毛並み</span>が気になる飼い主さんはドッグフードを買う際には以下2点のことに気をつけましょう！
                    </p>
                    <ul className="list">
                        <li>生産過程や原材料の供給元が信頼できるものであるか</li>
                        <li>必要な栄養素がバランスよく含まれているか</li>
                    </ul>
                </div>
                <div className="attention--content--point">
                    <h3 className="point-ttl point-3">添加物が少ないものを選ぶ！</h3>
                    <picture>
                        <Image 
                            src="/img/attention-3.webp"
                            alt="ドッグフード"
                            width={274}
                            height={159}
                            loading="lazy"
                        />
                    </picture>
                    <p>
                        添加物が多く含まれているドッグフードは栄養バランスが悪く、体内に蓄積するため長期的な健康被害の原因となる可能性があります。<br />
                        特にチワワなどの小型犬は少量でもその影響を受けやすいため、飼い主さんは注意が必要です。<br />
                        ドッグフードを買う際には以下の2点に気をつけましょう！
                    </p>
                    <ul className="list">
                        <li>食品の安全性が明確な基準で示されているか</li>
                        <li>特に有害な3種類の添加物（BHA、BHT、エトキシン）が含まれていないか</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Attention;