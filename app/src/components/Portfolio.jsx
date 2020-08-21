import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

export default function Portfolio() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.cinemablend.com/filter:scale/quill/1/4/e/5/2/1/14e5214b7130f782d5ae28042bc88082fa56d8b3.jpg?mw=600"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.cinemablend.com/filter:scale/quill/1/4/e/5/2/1/14e5214b7130f782d5ae28042bc88082fa56d8b3.jpg?mw=600"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.cinemablend.com/filter:scale/quill/1/4/e/5/2/1/14e5214b7130f782d5ae28042bc88082fa56d8b3.jpg?mw=600"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.cinemablend.com/filter:scale/quill/1/4/e/5/2/1/14e5214b7130f782d5ae28042bc88082fa56d8b3.jpg?mw=600"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
