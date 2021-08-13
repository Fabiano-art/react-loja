import "./Carousel.css"
import React from "react";

import img from "../../../assets/Images/macbook.jpg";
import img2 from "../../../assets/Images/macbook2.jpg";
import tv from "../../../assets/Images/tv.png";

export default function Carousel(props) {
    return (
        <React.Fragment>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="price-container">
                    <div className="price">
                        40% off
                    </div>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={tv} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </React.Fragment>
        
    )
}