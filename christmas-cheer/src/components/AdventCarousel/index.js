

import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import "./style.css";
import { adventContent } from "./adventContent";




export class BootstrapCarousel extends Component {
    render() {

        return (

            < div className="container-fluid">
                <Carousel className="carousel">
                    {
                        adventContent.map((item) =>
                            <Carousel.Item className="carouselItem">
                                <img className="cotton-image"

                                    src={item.src}
                                    alt={item.title}
                                />
                                <Carousel.Caption>
                                    <h3>{item.caption}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel >
            </div>


        )
    }
}


export default BootstrapCarousel


