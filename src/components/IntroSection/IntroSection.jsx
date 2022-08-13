import s from './introSection.module.scss';
import BaseSection from 'components/BaseSection/BaseSection';
import intro from 'data/intro';
import Button from 'components/Button/Button';

import img8 from 'img/8.png';
import img9 from 'img/9.png';
import img10 from 'img/10.png';
const arrImg = [img8, img9, img10];

export default function IntroSection() {
  return (
    <section className={s.intro}>
      <ul className="wrapp">
        {intro.map(({ id, title, paragraph, url }, i, arr) => (
          <li className={s.item} style={{ marginBottom: '220px' }} key={id}>
            <BaseSection
              title={title}
              paragraph={paragraph}
              urlImg={arrImg[i]}
              imgWidth={480}
              descrDiv={s.descrDiv}
              content={arr.length - 1 === i && <Button text={'Purchase Now'} />}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
