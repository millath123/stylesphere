import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
.background-image-container {
	background: url(../assets/ba)center no-repeat;
	background-size: 1150px 555px;
	height: 100vh;
	background-attachment: fixed;
	background-color: white;
  }
  
  .product-list {
	padding: 20px;
  }
  
  .product-card {
	border: 1px solid #ccc;
	border-radius: 10px;
	text-align: center;
  }
  
  .product-card img {
	max-width: 100%;
	height: auto;
  }
  
  .product-card h5 {
	font-size: 18px;
	margin: 10px 0;
  }
  
  .product-card p {
	font-size: 14px;
	margin: 5px 0;
  }
  
  .product-card button {
	background-color: #007bff;
	color: white;
	border: none;
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
  }
  
  .product-card button:hover {
	background-color: #0056b3;
  }
`;

const BannerCol = styled.div`
  padding-left: 20px;
`;

const LandingPage = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          
        </div>
      </div></div>
  );
}

export default LandingPage;
