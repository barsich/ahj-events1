import CatFlip from './CatFlip';

document.addEventListener('DOMContentLoaded', () => {
  const catFlip = new CatFlip();
  const flip = catFlip.flip.bind(catFlip);
  flip();
  // console.log(catFlip)
  // const interval = catFlip.interval.bind(catFlip);
});
