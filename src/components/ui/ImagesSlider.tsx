import type { Image } from '~/types';
import { useState } from 'react';

export interface Props {
  images: Image[];
}

const ImagesSlider = ({ images }: Props) => {
  const [active, setActive] = useState(0);

  const imagesLength = images.length;

  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      <div
        className="relative overflow-hidden rounded-lg"
        style={{
          height: 'calc(100vw * 0.5625)',
        }}
      >
        {images &&
          images.map((image, index) => (
            <div key={index} className={'duration-300 ease-linear' + `${active === index ? ' ' : ' hidden'}`}>
              <img
                src={image.src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={image.alt}
              />
            </div>
          ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => {
          if (active != 0) {
            setActive((prev) => prev - 1);
          } else {
            setActive(imagesLength - 1);
          }
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => {
          if (active != imagesLength - 1) {
            setActive((prev) => prev + 1);
          } else {
            setActive(0);
          }
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImagesSlider;
