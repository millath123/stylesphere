import React from "react";
import styled from "styled-components";
import backgroundImage from '../../assets/images/backgroud_img1 (1).png';

const BannerContainer = styled.div`
  background: url(${backgroundImage}) center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  backgroundcenter no-repeat;
  background-size: cover;
  color: white !important;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const BannerRow = styled.div`
  img {
    max-width: 70%;
    height: auto;
    display: block;
    padding-left: 30px;
  }
  h3, p {
    padding-left: 20px;
    padding-top: 20px;
    text-align: center;
  }
  a {
    background-color: white !important;
    color: black !important;
    border: none;
    margin-left: 20px;
    margin-top: 20px;
  }
`;

const BannerCol = styled.div`
  padding-left: 20px;
`;

const LandingPage = () => {
  return (
    <div>
      <section id="banner">
        <BannerContainer className="container-fluid" id="banner-container">
          <BannerRow className="row" id="banner-row">
            <BannerCol className="col-md-6" id="banner-col">
              <h3>
               
              </h3>
              <p>
                
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
                
              </div>
            </BannerCol>
            <div className="col-md-6" id="banner-col2">
              <img
                className="img-responsive rounded mx-auto d-block"
                src="images/gfg.png"
                alt=""
              />
            </div>
          </BannerRow>
        </BannerContainer>
      </section>
    </div>
  );
}

export default LandingPage;
