

import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import "./style.css";
import { adventContent } from "./adventContent";




export class BootstrapCarousel extends Component {
    render() {
        const style = {
            height: '400px',
            width: '500px'


        };
        return (

            < div className="container-fluid">
                <Carousel className="carousel">
                    {
                        adventContent.map((item) =>
                            <Carousel.Item className="carouselItem">
                                <img style={style}

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


