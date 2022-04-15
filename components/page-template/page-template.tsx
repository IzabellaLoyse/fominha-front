import { Footer, Header } from '@/components';
import Styles from './page-template.module.css';
import { PageProps } from './types';

export function PageTemplate({ ...props }: PageProps) {
  return (
    <>
      <Header />
      <main>
        <div className={Styles.page}>{props.children}</div>
      </main>

      <Footer />
    </>
  );
}
