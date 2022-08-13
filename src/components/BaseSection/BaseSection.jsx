import s from './baseSection.module.scss';

export default function BaseSection({
  title,
  paragraph,
  urlImg,
  alt = 'img',
  content,
  imgWidth = 540,
  descrDiv = s.descrDiv,
}) {
  return (
    <>
      <div className={descrDiv}>
        <h2 className={s.title}>{title}</h2>
        <p>{paragraph}</p>
        {content}
      </div>
      <div>
        <img src={urlImg} alt={alt} width={imgWidth} />
      </div>
    </>
  );
}
