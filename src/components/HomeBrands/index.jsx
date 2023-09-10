import FoodMaliIMG from '../../assets/food_mali.jpg';
import VistaIMG from '../../assets/vista-solution.jpeg';
import CiteMinisterielleIMG from '../../assets/primature_mali.jpg';
import PrimatureIMG from '../../assets/primature.png';
import './style.css';

const HomeBrands = () => {
  return (
    <div className="home__brands">
      <div className="container">
        <div className="home__trusted" id="home__trusted">
          <p>Nos partenaire de confiance</p>
          <h1>Les partenaires qui nous font confiances</h1>
        </div>
      </div>
      <div className="home__trusted_brands">
        <div className="container">
          <div className="home__trusted_brands_content" id="home__trusted_brands_content">
            <div>
              <img src={PrimatureIMG} alt="Cite ministerielle" />
              <span>Primature du Mali</span>
            </div>
            <div>
              <img src={CiteMinisterielleIMG} alt="Cite ministerielle" />
              <span>Cité ministerielle</span>
            </div>
            <div>
              <img src={VistaIMG} alt="Vista Solution" />
              <span>Vista Solution</span>
            </div>
            <div>
              <img src={FoodMaliIMG} alt="Restaurant HOLLA" />
              <span>Restaurant HOLLA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrands;
