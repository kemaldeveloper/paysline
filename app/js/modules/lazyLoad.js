import lozad from 'lozad';

export const initLazyLoad = () => {
  const observer = lozad();
  observer.observe();
};
