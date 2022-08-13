import s from './undrawMob.module.scss';
import BaseSection from 'components/BaseSection/BaseSection';
import i from 'img/11.png';

export default function UndrawMob() {
  return (
    <section className={s.undrawMob}>
      <div className={`wrapp ${s.flex}`}>
        <BaseSection
          title={'Light, Fast & Powerful'}
          paragraph={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`}
          urlImg={i}
          alt={'girl, phone'}
          content={
            <ul className={s.list}>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png"
                  alt="svg"
                  width="36"
                />
                <h3 className={s.h3}>Title Goes Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png"
                  alt="svg"
                  width="36"
                />
                <h3 className={s.h3}>Title Goes Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </li>
            </ul>
          }
        />
      </div>
    </section>
  );
}
