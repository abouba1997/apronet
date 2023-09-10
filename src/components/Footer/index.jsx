import { Link } from 'react-router-dom';
import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
  BiLogoTwitter,
} from 'react-icons/bi';
import LOGO from '../../assets/logo/apronet_logo.jpeg';
import './style.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer__container">
            <div className="footer__description">
              <div className="footer__descritpion__title">
                <img src={LOGO} alt="Apronet Logo" />
                <span>APRONET</span>
              </div>
              <p>
                Apronet est une entreprise de nettoyage professionnelle dédiée à l&apos;excellence dans le domaine de
                l&apos;entretien. Forte d&apos;une expertise solide, Apronet propose des services de nettoyage
                résidentiel et commercial sur mesure. Notre équipe dévouée et hautement qualifiée s&apos;engage à offrir
                des espaces impeccables, propres et sains à nos clients. Grâce à des méthodes innovantes et des produits
                respectueux de l&apos;environnement, Apronet garantit un nettoyage efficace tout en préservant notre
                planète. Choisissez Apronet pour une propreté inégalée et une satisfaction totale.
              </p>
              <div className="footer__socials">
                <Link>
                  <BiLogoFacebookSquare size={40} />
                </Link>
                <Link>
                  <BiLogoLinkedinSquare size={40} />
                </Link>
                <Link>
                  <BiLogoTiktok size={40} />
                </Link>
                <Link>
                  <BiLogoTwitter size={40} />
                </Link>
              </div>
            </div>
            <div className="footer__network_links">
              <div className="footer__services">
                <h3>Service</h3>
                <ul>
                  <Link>Nettoyage de Maison</Link>
                  <Link>Nettoyage de Fin de Chantiers</Link>
                  <Link>Nettoyage et entretiens des Espaces verts</Link>
                  <Link>Entretien de piscines</Link>
                  <Link>Lavage de Tapis, moquettes, canapés et voiture</Link>
                  <Link>Traitement phytosanitaire</Link>
                </ul>
              </div>
              <div className="footer__contact">
                <h3>Contact</h3>
                <div className="footer__contact_content">
                  <div className="footer__contact_link">
                    <BiPhone size={30} />
                    <div>
                      <span>+223 71-31-20-22</span>
                      <span>+223 74-37-88-88</span>
                      <span>+223 60-73-19-19</span>
                    </div>
                  </div>
                  <div className="footer__contact_link">
                    <BiEnvelope size={30} />
                    <span>apronet003@gmail.com</span>
                  </div>
                  <div className="footer__contact_link">
                    <BiMap size={30} />
                    <div>
                      <span>Bamako, Sebenikoro Route:RN5</span>
                      <span>Rue 475, Porte 13</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright (Droits d&apos;auteur détenus par) Apronet @ 2023. Tous droits reserves</p>
      </div>
    </div>
  );
};

export default Footer;
