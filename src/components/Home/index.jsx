import { motion } from 'framer-motion';
import HomeIMG from '../../assets/poster-banner.png';
import './style.css';
import HomeBrands from '../HomeBrands';
import HomeAbout from '../HomeAbout';
import HomeServices from '../HomeServices';
import Portfolio from '../Portfolio';

const Home = () => {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: -300, x: -200 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ opacity: { duration: 3 }, x: { duration: 5 }, y: { duration: 6 } }}
      >
        <div className="home">
          <div className="container">
            <div className="home__content">
              <div className="home__description">
                <div>
                  <h1>Apronet</h1>
                  <p className="home__description_title">
                    Votre partenaire de confiance pour des services de nettoyage professionnel et exceptionnels.
                  </p>
                  <p className="home__description_content">
                    Nous sommes fiers de vous offrir une solution de nettoyage hautement recommandée qui répond à vos
                    besoins les plus exigeants.
                  </p>
                </div>
              </div>
              <div className="home__image">
                <img src={HomeIMG} alt="Image du poster" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 300, x: -200 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ opacity: { duration: 3 }, x: { duration: 5 }, y: { duration: 6 } }}
      >
        <HomeBrands />
      </motion.div>
      <motion.div
        layout
        initial={{ opacity: 0, y: -300, x: -200 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ opacity: { duration: 3 }, x: { duration: 5 }, y: { duration: 6 } }}
      >
        <HomeAbout />
      </motion.div>
      <motion.div
        layout
        initial={{ opacity: 0, y: -300, x: 200 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ opacity: { duration: 3 }, x: { duration: 5 }, y: { duration: 6 } }}
      >
        <HomeServices />
      </motion.div>
      <Portfolio />
    </>
  );
};

export default Home;
