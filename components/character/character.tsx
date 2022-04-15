import Image from 'next/image';
import Styles from './character.module.css';

export function Character() {
  return (
    <section className={Styles.container}>
      <div className={Styles.device}>
        <Image
          src="/images/device.png"
          alt="Telefone"
          width={145}
          height={283}
        />
      </div>

      <div className={Styles.bubble}>
        <Image
          src="/images/speech-bubble.png"
          alt="Balão com Imagem de Comida"
          width={64}
          height={71}
        />
      </div>

      <div className={Styles.character}>
        <Image
          src="/images/character.png"
          alt="Personagem"
          width={183}
          height={246}
        />
      </div>

      <div className={Styles.background}>
        <Image
          src="/images/background.png"
          alt="Fundo da Imagem"
          width={328}
          height={318}
        />
      </div>

      <hr />
    </section>
  );
}
