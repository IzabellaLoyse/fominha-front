import { DisheDetails } from '@/components';
import Image from 'next/image';
import Styles from './dishe.module.css';

export function Dishe() {
  return (
    <section className={Styles.dishe}>
      <div className={Styles.wrapper}>
        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="Pizza de Peperoni"
          width={592}
          height={312}
          layout="responsive"
        />
      </div>

      <section>
        <div className={Styles.header}>
          <h2 className={Styles.subtitle}>Nome do produto</h2>
        </div>

        <div className={Styles.details}>
          <DisheDetails type="reviews" title="(201)" subtitle="4.5" />
          <DisheDetails type="category" title="Categoria" />
          <DisheDetails type="delivery" title="30 - 40 min" />
        </div>
      </section>
    </section>
  );
}
