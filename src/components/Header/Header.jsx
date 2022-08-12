import s from './header.module.scss';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={`wrapp ${s.flex}`}>
        <Navigation color={'#505F98'} />
        <Logo />
        <Button text={'Buy Now'} />
      </div>
    </header>
  );
}
