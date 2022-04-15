import { Character, PageTemplate, Search } from '@/components';
import type { NextPage } from 'next';
import Head from 'next/head';
import Styles from '../styles/internals.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fominha Front</title>
        <meta name="description" content="Seu Delivery de comida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate>
        <div className={Styles.content}>
          <h1>Encontre opções em Delivery próximos à você.</h1>
          <Search />

          <h2>Descubra o novo jeito de pedir um Delivery 🛵</h2>
          <Character />
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
