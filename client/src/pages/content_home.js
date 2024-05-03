import { Link } from "react-router-dom";
import ModalImg from "../pictures/modal.jpg";
import CompactImg from "../pictures/compact.jpeg";
import EyelinerImg from "../pictures/eyeliner.jpeg";
import NailpaintImg from "../pictures/nailpaint.jpeg";
import SerumImg from "../pictures/serum.jpeg";
import MoisturiserImg from "../pictures/moisturiser.jpg";
import LipstickImg from "../pictures/lipstick.jpg";
import BasketImg from "../pictures/add-to-basket.png";
import BeautyImg from "../pictures/beauty.png";

const ProductCard = ({ image, name, price }) => (
  <div className="cards">
    <div className="image">
      <img src={image} alt={name} />
    </div>
    <div className="name">
      <h3>{name}</h3>
      <p>Add to Cart</p>
      <img src={BasketImg} alt="Add to Cart" />
    </div>
    <div className="price">
      <h3>Rs: </h3>
      <h3>{price}</h3>
    </div>
  </div>
);

const ContentHome = () => {
  return (
    <>
      <div className="mainContent">
        <div className="left">
          <img src={ModalImg} alt="Modal" />
        </div>
        <div className="content">
          <h1>MEGA</h1>
          <h1>SALE</h1>
          <p>Everything At 30% Off</p>
          <Link to="/login">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>

      <div className="bestselling">
        <h2>OUR BEST SELLERS</h2>
        <div className="products">
          <div className="compacts">
            <ProductCard image={CompactImg} name="Compact" price="200 - 300" />
          </div>
          <div className="eyeliners">
            <ProductCard image={EyelinerImg} name="Black Eye Liner" price="100 - 200" />
          </div>
          <div className="nailpaints">
            <ProductCard image={NailpaintImg} name="Light Pink NailPaint" price="70 - 100" />
          </div>
          <div className="lipsticks">
            <ProductCard image={LipstickImg} name="Shades of Pink" price="100 - 150" />
          </div>
          <div className="serums">
            <ProductCard image={SerumImg} name="Livon Hair Serum" price="140 - 200" />
          </div>
          <div className="moisturisers">
            <ProductCard image={MoisturiserImg} name="Peach Moisturiser" price="110 - 199" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="image-products">
          <img src={BeautyImg} alt="Beauty" />
        </div>
        <div className="about">
          <h2>About Us</h2>
          <div className="info">
            <div className="branches">
              <h4>Our Branches:</h4>
              <p>Mumbai</p>
              <p>Hyderabad</p>
              <p>New Delhi</p>
              <p>Bengaluru</p>
              <p>Chennai</p>
            </div>
            <div className="our-team">
              <h4>Our Team</h4>
              <p>
                Starting journey from a single proprietor, having reached this position is incomplete without the
                hard work, passion, and dedication of the entire team. The team on the stores as well as the backend
                are a bunch of incredible people, working hard day and night to make UnLeash a success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHome;
