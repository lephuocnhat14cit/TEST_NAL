/* eslint-disable import/prefer-default-export */
export const sliderTV = (data) => {
  let slidesPerView = 1;
  let className = 'MainPage__today1';

  if (data && data.length > 2 && data.length <= 4) {
    slidesPerView = 3;
    className = 'MainPage__today3';
  } else if (data && data.length > 4) {
    slidesPerView = 5;
    className = 'MainPage__today5';
  } else {
    slidesPerView = 1;
    className = 'MainPage__today1';
  }

  return { slidesPerView, className };
};
