import s from './socials.module.scss';

export default function Socials({ alt, src, url, id }) {
  return (
    <li key={id}>
      <a href={src}>
        <img src={url} alt={alt} width="16" />
      </a>
    </li>
  );
}
