import model from "../pictures/modal.png";
import compact from "../pictures/compact.jpeg";
import eyeliner from "../pictures/eyeliner.jpeg";
import nailpaint from "../pictures/nailpaint.jpeg";
import serum from "../pictures/serum.jpeg";
import moisturiser from "../pictures/moisturiser.jpg";
import lipstick from "../pictures/lipstick.jpg";
import basket from "../pictures/add-to-basket.png";
import beauty from "../pictures/beauty.png";
import { Link } from "react-router-dom";

const ContentHome = () => {
    return ( 
        <>
        <div className="mainContent">
            <div className="left">
                <img src={modal}></img>
            </div>
            <div className="content">
                <h1>MEGA</h1>
                <h1>SALE</h1>
                <p>Everything At 30% Off</p>
                <Link to = "/login">
                <button>SHOP NOW</button>
                </Link>
            </div>
           
        </div>

        <div className="bestselling">
            <h2>OUR BEST SELLERS</h2>

            <div className="products">
                <div className="compacts">
                    <div className="cards">
                        <div className="image">
                            <img src={compact}></img>
                        </div>

                        <div className="name">
                            <h3>Compact</h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs: </h3>
                            <h3> 200</h3>
                            <h3> 300</h3>
                        </div>

                    </div>
                </div>

                <div className="eyeliners">
                    <div className="cards">
                        <div className="image">
                            <img src={eyeliner}></img>
                        </div>

                        <div className="name">
                            <h3>Black Eye Liner</h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs:</h3>
                            <h3> 100</h3>
                            <h3> 200</h3>
                        </div>
                    </div>
                </div>

                <div className="nailpaints">
                    <div className="cards">
                        <div className="image">
                            <img src={nailpaint}></img>
                        </div>

                        <div className="name">
                            <h3>Light Pink NailPaint </h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs: </h3>
                            <h3> 70</h3>
                            <h3> 100</h3>
                        </div>

                    </div>
                </div>

                <div className="lipsticks">
                    <div className="cards">
                        <div className="image">
                            <img src={lipstick}></img>
                        </div>

                        <div className="name">
                            <h3>Shades of Pink</h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs:</h3>
                            <h3> 100</h3>
                            <h3> 150</h3>
                        </div>

                    </div>
                </div>

                <div className="serums">
                    <div className="cards">
                        <div className="image">
                            <img src={serum}></img>
                        </div>

                        <div className="name">
                            <h3>Livon Hair Serum</h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs:</h3>
                            <h3> 140</h3>
                            <h3> 200</h3>
                        </div>

                    </div>
                </div>

                <div className="moisturisers">
                    <div className="cards">
                        <div className="image">
                            <img src={moisturiser}></img>
                        </div>

                        <div className="name">
                            <h3>Peach Moisturiser</h3>
                            <p>Add to Cart</p>
                            <img src={basket}></img>
                        </div>

                        <div className="price">
                            <h3>Rs:</h3>
                            <h3> 110</h3>
                            <h3> 199</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="image-products">
                <img src={beauty}></img>
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
                        <p>Starting jounery from a single proprietor, having reached this position is incomplete 
                            without the hardwork, passion and dedication of the entire team. 
                            The team on the stores as well as the backend are a bunch of incredible people, working hard day and night to make UnLeash a succes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default ContentHome;



    

   