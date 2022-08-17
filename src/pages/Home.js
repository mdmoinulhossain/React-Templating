import React, { Component } from "react";
import "./Home.css";
import img from "../image/Headphone.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <main className="home_main">
          <section className="card_body">
            <img src={img} alt="headphone" className="product_img" />
            <p className="product_name">
              Micro Fiber Bike/Car Cleaning Towel Double Layer 30*30cm
            </p>
            <div className="product_footer">
              <p className="product_cp">Tk. 500</p>
              <p className="product_op">
                Tk. 800 <span className="product_dc">-20%</span>
              </p>
              <a href=" " className="wishlist">
                &#10084;&#65039; Wishlist
              </a>
            </div>
          </section>
          <section className="card_body">
            <img src={img} alt="headphone" className="product_img" />
            <p className="product_name">Micro Fiber Bike/Car Cleaning.</p>
            <div className="product_footer">
              <p className="product_cp">Tk. 500</p>
              <p className="product_op">
                Tk. 800 <span className="product_dc">-20%</span>
              </p>
              <a href=" " className="wishlist">
                &#10084;&#65039; Wishlist
              </a>
            </div>
          </section>
          <section className="card_body">
            <img src={img} alt="headphone" className="product_img" />
            <p className="product_name">
              Micro Fiber Bike/Car Cleaning Towel Double Layer 30*30cm. Towel
              Double Layer 30*30cm. Towel Double Layer 30*30cm.
            </p>
            <div className="product_footer">
              <p className="product_cp">Tk. 500</p>
              <p className="product_op">
                Tk. 800 <span className="product_dc">-20%</span>
              </p>
              <a href=" " className="wishlist">
                &#10084;&#65039; Wishlist
              </a>
            </div>
          </section>
          <section className="card_body">
            <img src={img} alt="headphone" className="product_img" />
            <p className="product_name">
              Micro Fiber Bike/Car Cleaning Towel Double Layer 30*30cm
            </p>
            <div className="product_footer">
              <p className="product_cp">Tk. 500</p>
              <p className="product_op">
                Tk. 800 <span className="product_dc">-20%</span>
              </p>
              <a href=" " className="wishlist">
                &#10084;&#65039; Wishlist
              </a>
            </div>
          </section>
        </main>
      </>
    );
  }
}
