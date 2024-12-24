import React from 'react';
import Image from 'next/image';

const Supervisor: React.FC = () => {
    return (
        <section className="supervisor">
            <h2 className="supervisor--ttl">犬の管理栄養士が記事を監修！</h2>
            <div className="supervisor--content">
                <picture className="supervisor--content--img">
                    <Image 
                        src="/img/supervisor.webp"
                        alt="管理栄養士の証明"
                        width={280}
                        height={150}
                        loading="lazy"
                    />
                </picture>
                <h3 className="supervisor--content--top">「犬の管理栄養士」とは？</h3>
                <p className="txt">
                    犬の健康を維持し、特定の健康状態やライフステージに適した栄養を提供するために食事プランを設計・管理する専門家です。<br />
                    1匹でも多くのワンちゃんが長く、健康的に生きられるように培った知識を日々発信しています。
                </p>
            </div>
        </section>
    );
};

export default Supervisor;