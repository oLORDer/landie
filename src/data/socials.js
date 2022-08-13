function importAll(r) {
  let images = {};
  r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
  return images;
}

const images = importAll(
  require.context('img/svg', false, /\.(png|jpe?g|svg)$/)
);

const socialSvg = [
  {
    id: 12,
    alt: 'facebook',
    url: images['facebook.svg'],
    src: 'https://facebook.com/',
  },
  {
    id: 13,
    alt: 'linkedIn',
    url: images['linkedIn.svg'],
    src: '',
  },
  {
    id: 14,
    alt: 'twitter',
    url: images['twitter.svg'],
    src: '',
  },
  {
    id: 15,
    alt: 'youtube',
    url: images['youtube.svg'],
    src: '',
  },
  {
    id: 16,
    alt: 'Instagram',
    url: images['Instagram.svg'],
    src: '',
  },
];

export default socialSvg;
