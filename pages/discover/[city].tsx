import { DisheList, PageTemplate } from '@/components';
import { useRouter } from 'next/router';
import Styles from '../../styles/discover.module.css';

export default function Discover() {
  const router = useRouter();
  const { city } = router.query;

  return (
    <PageTemplate>
      <div className={Styles.content}>
        <h1>Opções na região de {city}</h1>
        <p>Encontramo x opções</p>

        <div className={Styles.items}>
          <DisheList />
        </div>
      </div>
    </PageTemplate>
  );
}
