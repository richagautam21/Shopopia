import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://img.freepik.com/premium-photo/makeup-brush…und-with-empty-space-text-top-view_717472-600.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="49538094"
            title="DeBelle Gel Nail Polish Mauve Orchid (Dark Mauve Nail Paint), 8ml | Non UV - Gel Finish "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61RegMgRS5S._AC_UF1000,1000_QL80_.jpg"
          />

          <Product
            id="23445930"
            title="Marks and Spencer Lau De Toillete(FEMALE,NO COLOUR)"
            price={98.99}
            rating={5}
            image="https://images-cdn.ubuy.co.in/633ad3e042ac154cff30fc8c-burberry-classic-eau-de-parfum-perfume.jpg"
          />

          <Product
            id="12321341"
            title="Maybelline New York Fit Me Matte + Poreless Liquid"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51bXq7c9mxL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Bronson Professional Make Up brush set with Makeup Sponge"
            price={1094.98}
            rating={4}
            image="	https://images-cdn.ubuy.co.in/633b4d7b43a9bd5c2e675006-makeup-brushes-16pcs-professional-makeup.jpg"
          />

          <Product
            id="4903850"
            title="Sugar LC49RG90SSUXEN 49' Matte Finish Lipstick"
            price={199.99}
            rating={3}
            image="https://t3.ftcdn.net/jpg/00/58/38/12/360_F_58381204_IRRMEENV2CoIO0zR5MXdrSplEW0li7Cq.jpg"
          />

          <Product
            id="3254354345"
            title="MamaEarth Onion Conditioner for Hair Fall Control 250ml"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51PBDsrH2kL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094324"
            title="Sunny FaceWash Fel enriched with Aloevera & Tulsi For Cleamsing"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XbiJC3zQL.jpg"
          />
          <Product
            id="49538092134"
            title="NOVA NHP 8100 Silky Shine Hot Hair Dryer"
            price={239.0}
            rating={4}
            image="	https://www.shutterstock.com/image-vector/hair-dryer-isolated-on-white-260nw-426513958.jpg"
          />
          <Product
            id="49538092224"
            title="BrilliantDay 24pcs Professional Makeup & Portable Set All-in-One"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71KSEo-x+KL.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
