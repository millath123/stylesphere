import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const BannerContainer = styled.div`
  background: url('https://i.imgur.com/rnTJ5Jy.png') center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: white !important;
  padding-top: 80px;
  padding-bottom: 80px;
  height: 500px;
  width:88%;
`;

const BannerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    max-width: 35%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const BannerCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: cursive;
`;

const LandingPage = () => {
  return (
    <div>
      <section id="banner">
        <BannerContainer className="container-fluid" id="banner-container">
          <BannerRow className="row" id="banner-row">
            <BannerCol className="col-md-6" id="banner-col">
            <h2 className="text-center text-md-start text-dark " >Where Trends Are Born</h2>
            </BannerCol>
            <BannerCol className="col-md-6" id="banner-col2">
            <img
                className="img-responsive rounded mx-auto d-block"
                src="https://i.imgur.com/KEI1Lj1.png"
                alt="Banner"
              />
            </BannerCol>
          </BannerRow>
        </BannerContainer>
      </section>
    </div>
  );
};

export default LandingPage;
