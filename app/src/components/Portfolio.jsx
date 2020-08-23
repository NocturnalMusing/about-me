import React from 'react'
import './Portfolio.css'

// import Carousel from 'react-bootstrap/Carousel'
import { cards } from '../assets/portfolio_cards'

export default function Portfolio() {

    let current = 0

    const handleClickRight = (e) => {
        current < cards.length - 1 ? current += 1 : current = 0
    }

    const handleClickLeft = (e) => {
        current > 0 ? current -= 1 : current = cards.length - 1
    }

    return (
        <div className="carousel">
            <button onClick={handleClickLeft}>Back</button>
            {cards.map(card =>
                <div className={cards.findIndex === 0 ? 'show' : 'hide'}>
                    {/* If cards index === the current visible card, apply 'show'
                    Else, apply 'hide' */}
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
