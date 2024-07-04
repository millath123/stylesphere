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
  width: 100%; /* Make width 100% to be responsive */
`;

const BannerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  h3, p {
    padding: 0 20px;
    text-align: center;
  }
  a {
    background-color: white !important;
    color: black !important;
    border: none;
    margin-top: 20px;
  }
`;

const BannerCol = styled.div`
  padding: 20px;
`;

const LandingPage = () => {
  return (
    <div>
      <section id="banner">
        <BannerContainer className="container-fluid" id="banner-container">
          <BannerRow className="row" id="banner-row">
            <BannerCol className="col-md-6" id="banner-col">
              {/* <h3>Welcome to Our Store</h3>
              <p>Discover amazing products and deals just for you!</p> */}
              {/* <div className="d-grid gap-2 d-md-flex justify-content-center">
                <a href="#shop" className="btn btn-primary">Shop Now</a>
              </div> */}
            </BannerCol>
            <div className="col-md-6" id="banner-col2">
              {/* <img
                className="img-responsive rounded mx-auto d-block"
                src="https://via.placeholder.com/300"
                alt="Banner"
              /> */}
            </div>
          </BannerRow>
        </BannerContainer>
      </section>
    </div>
  );
};

export default LandingPage;
