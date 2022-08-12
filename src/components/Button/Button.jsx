import s from './button.module.scss';

export default function Button({ text, light = false, small = false }) {
  return (
    <button className={`${light ? s.btnLigh : s.btn} ${small && s.small}`}>
      {text}
    </button>
  );
}
