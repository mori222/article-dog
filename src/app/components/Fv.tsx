import React from 'react';
import Image from 'next/image';

const Fv: React.FC = () => {
  return (
    <section className='fv'>
      <picture>
        <Image 
          src="/img/fv.webp"
          alt="2024年ドッグフードおすすめランキング"
          width={390}
          height={200}
          loading="lazy"
        />
      </picture>
    </section>
  );
};

export default Fv;
