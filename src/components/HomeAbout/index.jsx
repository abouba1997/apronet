import AboutGallery from './AboutGallery';
import { images } from './AboutGallery/images';
import './style.css';

const HomeAbout = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__description">
            <div>
              <p className="about__title">A propos</p>
              <h1>Rapidement et facilement nettoyer, amenager votre espace.</h1>
              <p className="about__description_title">
                Votre partenaire de confiance pour des services de nettoyage professionnel et exceptionnels.
              </p>
              <p className="about__description_content">
                Nous sommes fiers de vous offrir une solution de nettoyage hautement recommandée qui répond à vos
                besoins les plus exigeants.
              </p>
            </div>
            <button>Contact pour plus d&apos;informations</button>
          </div>
          <AboutGallery galleryID="about__gallery" images={images} />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
