import React from "react";
import Layout from "../Components/layouts/Layout";

const Sproduct = () => {
  return (
    <>
      <Layout>
        <section id="product_details" className="section-p1">
          <div className="single_pro_img">
            <img
              src="img/products/f1.jpg"
              width="100%"
              alt=""
              id="main_image"
            />
            <div className="small_img_group">
              <div className="small_img_col">
                <img
                  src="img/products/f1.jpg"
                  width="100%"
                  className="small_img"
                  alt=""
                />
              </div>
              <div className="small_img_col">
                <img
                  src="img/products/f2.jpg"
                  width="100%"
                  className="small_img"
                  alt=""
                />
              </div>
              <div className="small_img_col">
                <img
                  src="img/products/f3.jpg"
                  width="100%"
                  className="small_img"
                  alt=""
                />
              </div>
              <div className="small_img_col">
                <img
                  src="img/products/f4.jpg"
                  width="100%"
                  className="small_img"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="single_pro_details">
            <h6>Home / T-shirt</h6>
            <h4>Men's Fashion T-shirt</h4>
            <h2>$139.00</h2>
            <select name="" id="">
              <option value="">select Size</option>
              <option value="">XL</option>
              <option value="">XXL</option>
              <option value="">small</option>
              <option value="">large</option>
            </select>
            <input type="number" name="" id="" defaultValue={1} />
            <button className="btn_transP"> Add To Cart</button>
            <h4>product Details</h4>
            <span>
              The Gildon Ultra Cotton T-shirt is made from a substantial 6.0 Oz.
              per sq.yd. fabric constructed from 100% cotton, this classic fit
              preshrunk jersey knit provide unmatched comfort with each wear.
              Featurinf a tap nect and shoulder, and a seamless double-needle
              coller, and available in a range of color, it offer ot all in the
              ultimate head-turning package.
            </span>
          </div>
        </section>
        <section id="feature1" className="section-p1">
          <div className="pro_head">
            <h2>Featured Products</h2>
            <p>Summer collection New modern</p>
          </div>
          <div className="pro_container">
            <div className="pro">
              <img src="img/products/n5.jpg" alt="" />
              <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="price_cart">
                  <h4>$79</h4>
                  <a href="#" className="fal fa-shopping-cart" />
                </div>
              </div>
            </div>
            <div className="pro">
              <img src="img/products/n6.jpg" alt="" />
              <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="price_cart">
                  <h4>$75</h4>
                  <a href="#" className="fal fa-shopping-cart" />
                </div>
              </div>
            </div>
            <div className="pro">
              <img src="img/products/n7.jpg" alt="" />
              <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="price_cart">
                  <h4>$70</h4>
                  <a href="#" className="fal fa-shopping-cart" />
                </div>
              </div>
            </div>
            <div className="pro">
              <img src="img/products/n8.jpg" alt="" />
              <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="price_cart">
                  <h4>$60</h4>
                  <a href="#" className="fal fa-shopping-cart" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="newsletters">
          <img src="img/banner/b14.png" alt="" />
          <div className="left">
            <h4>Sign Up For Newsletters</h4>
            <p>
              Get E-mails updates about our latest shop and{" "}
              <span>Special offers</span>
            </p>
          </div>
          <div className="right">
            <input
              type="text"
              name="search"
              id="searchBar"
              placeholder="Enter your E-mail "
            />
            <button
              type="submit"
              className="normal_btn"
              style={{ backgroundColor: "#088178", color: "white" }}
            >
              Sign Up
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sproduct;
