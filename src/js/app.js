import CatFlip from './CatFlip';

document.addEventListener('DOMContentLoaded', () => {
  const catFlip = new CatFlip();
  catFlip.createField();
  const flip = catFlip.flip.bind(catFlip);
  flip();
});
