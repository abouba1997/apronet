import { Link } from 'react-router-dom';
import { BiLogoTiktok, BiLogoFacebookSquare, BiLogoTwitter, BiLogoLinkedinSquare } from 'react-icons/bi';
const HomeBanner = () => {
  return (
    <div className="home__banner">
      <div className="container">
        <div className="home__banner_content">
          <div className="home__banner_contact">
            <span>
              Adresse:{' '}
              <span className="home__banner_contact">
                <span>+223 71-31-20-22</span>
              </span>
            </span>
          </div>
          <div className="home__banner_socials">
            <Link target="_blank">
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
      </div>
    </div>
  );
};

export default HomeBanner;
