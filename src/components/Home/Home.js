import React from "react";
import styled from "styled-components";
import Product from "./Product";

const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 1500px;

  .home__image {
    width: 100%;
    z-index: -100;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .home__row {
    display: flex;
    z-index: 1;
    margin: 0 5px;
  }
`;
function Home() {
  return (
    <HomeStyled>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="homeimg"
      />
      <div className="home__row">
        <Product
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum nam esse rem est repellendus obcaecati quam in ipsa praesentium."
          price={29.99}
          image="https://media.4rgos.it/i/Argos/8816155_R_Z001A?w=1500&h=880&qlt=70&fmt=webp  "
          rating={5}
        />
        <Product
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum nam esse rem est repellendus obcaecati quam in ipsa praesentium."
          price={29.99}
          image="https://media.4rgos.it/i/Argos/8816155_R_Z001A?w=1500&h=880&qlt=70&fmt=webp  "
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum nam esse rem est repellendus obcaecati quam in ipsa praesentium."
          price={29.99}
          image="https://media.4rgos.it/i/Argos/8816155_R_Z001A?w=1500&h=880&qlt=70&fmt=webp  "
          rating={5}
        />
        <Product
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum nam esse rem est repellendus obcaecati quam in ipsa praesentium."
          price={29.99}
          image="https://media.4rgos.it/i/Argos/8816155_R_Z001A?w=1500&h=880&qlt=70&fmt=webp  "
          rating={1}
        />
        <Product
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum nam esse rem est repellendus obcaecati quam in ipsa praesentium."
          price={29.99}
          image="https://media.4rgos.it/i/Argos/8816155_R_Z001A?w=1500&h=880&qlt=70&fmt=webp  "
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum nam esse rem est repellendus obcaecati quam in ipsa praesentium."
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91KVTpOSyjL._AC_SX679_.jpg"
          rating={5}
        />
      </div>
    </HomeStyled>
  );
}

export default Home;
