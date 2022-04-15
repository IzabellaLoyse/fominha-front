import { IconBookmark, IconHome } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './header.module.css';

export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={45}
                height={36}
                alt="Logo de Hamburguer do Fominha Front"
              />
              <span> Fominha Front</span>
            </a>
          </Link>
        </div>

        <ul className={Styles.navList}>
          <li>
            <Link href="/">
              <a>
                <IconHome />
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/favorites">
              <a>
                <IconBookmark />
                Favoritos
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
