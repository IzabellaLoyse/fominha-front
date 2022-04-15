import { IconCategory, IconDelivery, IconReviws } from '@/icons';
import Styles from './dishe-details.module.css';
import { DisheDetailsProps } from './types';

export function DisheDetails({ type, subtitle, title }: DisheDetailsProps) {
  const Icon =
    type === 'delivery'
      ? IconDelivery
      : type === 'category'
      ? IconCategory
      : IconReviws;

  return (
    <section className={Styles.detail}>
      <div className={Styles.icon}>
        <Icon />
      </div>

      {subtitle && <span>{subtitle}</span>}
      {title}
    </section>
  );
}
