import s from './footer.module.scss';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import Socials from 'components/Socials/Socials';
import socialSvg from 'data/socials';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrapp">
        <div className={s.top}>
          <p>©2020 Yourcompany</p>
          <Logo />
          <Button />
        </div>
        <span className={s.line}></span>
        <div className={s.bot}>
          <Navigation color={'#929ECC'} />
          <ul className={s.socialList}>
            {socialSvg.map(({ id, alt, url, src }) => (
              <Socials id={id} alt={alt} url={url} src={src} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
