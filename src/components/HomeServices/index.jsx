import { Link } from 'react-router-dom';
import { BiHome, BiBuildingHouse, BiSolidRectangle, BiBath, BiBlanket, BiBriefcaseAlt2 } from 'react-icons/bi';
import './style.css';

const HomeServices = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="services__content">
          <p className="services__title">Nos services</p>
          <h1 className="services__description">CE QUE NOUS OFFRONS COMME SERVICES</h1>
          <div className="services__cards">
            <Link className="service-card">
              <BiHome size={40} />
              <h2>Nettoyage de Maison</h2>
              <p>
                Rehaussez votre espace de vie avec notre service de nettoyage de maison de première classe. Découvrez la
                propreté et le confort comme jamais auparavant.
              </p>
            </Link>
            <Link className="service-card">
              <BiBuildingHouse size={40} />
              <h2>Nettoyage de Fin de Chantiers</h2>
              <p>
                Pour une finition impeccable de chaque chantier, optez pour notre service de nettoyage professionnel.
                Nettoyage de chantiers de haute qualité pour une satisfaction totale.
              </p>
            </Link>
            <Link className="service-card">
              <BiSolidRectangle size={40} />
              <h2>Nettoyage et entretiens des Espaces verts</h2>
              <p>
                Transformez vos espaces verts avec notre service de nettoyage expert. Des jardins et espaces extérieurs
                impeccables pour votre plaisir.
              </p>
            </Link>
            <Link className="service-card">
              <BiBath size={40} />
              <h2>Entretien de piscines</h2>
              <p>
                Profitez de votre piscine propre et étincelante grâce à notre service d&apos;entretien de piscines
                professionnel. Une eau cristalline pour des moments de détente parfaits.
              </p>
            </Link>
            <Link className="service-card">
              <BiBlanket size={40} />
              <h2>Lavage de Tapis, moquettes, canapés et voiture</h2>
              <p>
                Confiez-nous le lavage de vos tapis, moquettes, canapés et le nettoyage complet de votre voiture,
                intérieur et extérieur. Des services de qualité pour un intérieur impeccable et une voiture étincelante.
              </p>
            </Link>
            <Link className="service-card">
              <BiBriefcaseAlt2 size={40} />
              <h2>Traitement phytosanitaire</h2>
              <p>
                Assurez la sécurité de votre environnement avec nos services de traitement phytosanitaire, incluant la
                dératisation, la désinsectisation, la désinfection et la fumigation. Protégez votre espace avec notre
                expertise professionnelle.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
