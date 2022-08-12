import s from './navigation.module.scss';

export default function Navigation({ color }) {
  return (
    <nav className={s.nav}>
      <a className={s.link} href="#home" style={{ color: color }}>
        Home
      </a>
      <a className={s.link} href="#About" style={{ color: color }}>
        About
      </a>
      <a className={s.link} href="#Contacts" style={{ color: color }}>
        Contacts
      </a>
    </nav>
  );
}
