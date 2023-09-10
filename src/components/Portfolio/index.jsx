import { motion } from 'framer-motion';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import ImageCarousel from './ImageCarousel';

import './style.css';
import getImgUrl from '../../utils/importImages';

const media1 = [
  {
    id: 1,
    img: getImgUrl('about_images', 'cleaner_1', 'png'),
    title: 'Sample text',
  },
  {
    id: 2,
    img: getImgUrl('about_images', 'cleaner_2', 'jpg'),
    title: 'Sample text',
  },
  {
    id: 3,
    img: getImgUrl('about_images', 'cleaner_3', 'jpg'),
    title: 'Sample text',
  },
  {
    id: 4,
    img: getImgUrl('about_images', 'cleaner_3', 'jpg'),
    title: 'Sample text',
  },
];

const Portfolio = () => {
  const coverflowProps = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
  };

  const autoplayProps = {
    loop: true,
    style: {
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__content">
          <p className="portfolio__title">Notre portfolio</p>
          <h1 className="portfolio__description">Présentation de nos travaux récents</h1>
          <motion.div
            layout
            initial={{ opacity: 0, y: 300, x: 200 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ opacity: { duration: 3 }, x: { duration: 5 }, y: { duration: 6 } }}
          >
            <ImageCarousel photos={media1} swiperType={coverflowProps} />
          </motion.div>
          <hr />
          <motion.div
            layout
            initial={{ opacity: 0, y: 0, x: -200 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ opacity: { duration: 3 }, x: { duration: 5 }, y: { duration: 6 } }}
          >
            <ImageCarousel photos={media1} swiperType={autoplayProps} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
