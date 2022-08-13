import s from './pricing.module.scss';
import Button from 'components/Button/Button';

export default function Pricing() {
  return (
    <section className={s.pricing}>
      <div className={`wrapp ${s.flex}`}>
        <h2 className={s.title}>A Price To Suit Everyone</h2>
        <p className={s.paragr}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p className={s.price}>$40</p>
        <p className={s.ui}>UI Design Kit</p>
        <p className={s.simple}>See, One price. Simple.</p>
        <Button />
      </div>
    </section>
  );
}
