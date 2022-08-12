import Button from 'components/Button/Button';
import s from './hero.module.scss';

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className="wrapp">
        <h1 className={s.title}>
          Introduce Your Product Quickly {`&`} Effectively
        </h1>
        <p className={s.descr}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <Button text={'Purchase UI Kit'} />
        <Button text={'Learn More'} light={true} />
      </div>
    </section>
  );
}
