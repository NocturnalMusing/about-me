import React from 'react'
import './Portfolio.css'

// import Carousel from 'react-bootstrap/Carousel'
import { cards } from '../assets/portfolio_cards'

export default function Portfolio() {

    const showSlide = (num) => {
        // for (let i = 0; i < cards.length; i++) {
        //     cards[i].setAttribute('style', 'display: none;')
        // }

        // cards[num].setAttribute('style', 'display: block;')
    }

    let current = 0

    const handleClickRight = (e) => {
        if (current < cards.length - 1) {
            current += 1
        }
        else {
            current = 0
        }

        showSlide(current)
    }

    const handleClickLeft = (e) => {
        if (current > 0) {
            current -= 1
        }
        else {
            current = cards.length - 1
        }

        showSlide(current)
    }

    return (
        <div className="carousel">
            <button onClick={handleClickLeft}>Back</button>
            {cards.map(card =>
                <div>
                    <img src={card.image} />
                    <h3>{card.name}</h3>
                    <p>{card.caption}</p>
                    <a href={card.url}>Live View</a>
                </div>
            )}
            <button onClick={handleClickRight}>Forward</button>
        </div>
    )
}


{/* <Carousel interval={null} className='carousel'>
                <Carousel.Item className='carousel-item'>
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

                <Carousel.Item className='carousel-item'>
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
                
                <Carousel.Item className='carousel-item'>
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

                <Carousel.Item className='carousel-item'>
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
            </Carousel> */}