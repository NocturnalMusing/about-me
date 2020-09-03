import React, { useState } from 'react'
import './Portfolio.css'

// import Carousel from 'react-bootstrap/Carousel'
import { cards } from '../assets/portfolio_cards'

export default function Portfolio() {

    let [ count, setCount ] = useState(0)

    const handleClickRight = (e) => {
        count < cards.length - 1 ? setCount(count + 1) : setCount(0)
    }
    
    const handleClickLeft = (e) => {
        count > 0 ? setCount(count - 1) : setCount(cards.length - 1)
    }
    

    return (
        <div className="carousel">
            <button onClick={handleClickLeft}>Back</button>
            {cards.map(card =>
                <div className={cards.indexOf(card) === count ? 'show' : 'hide'}>
                    <img src={card.img} alt={card.alt}/>
                    <h3>{card.name}</h3>
                    <p>{card.caption}</p>
                    <a href={card.url}>Live View</a>
                </div>
            )}
            <button onClick={handleClickRight}>Forward</button>
        </div>
    )
}
