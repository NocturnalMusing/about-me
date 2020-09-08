import React, { useState } from 'react'
import './Portfolio.css'

import { cards } from '../assets/portfolio_cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {

    let [count, setCount] = useState(0)

    const handleClickRight = (e) => {
        count < cards.length - 1 ? setCount(count + 1) : setCount(0)
    }

    const handleClickLeft = (e) => {
        count > 0 ? setCount(count - 1) : setCount(cards.length - 1)
    }


    return (
        <div className="carousel">
            <FontAwesomeIcon icon={faAngleLeft} size='4x' 
                className='arrow-left'
                onClick={handleClickLeft}/>
            <div className='carousel-background'>
                <div className='carousel-content'>
                    {cards.map(card =>
                        <div className={cards.indexOf(card) === count ? 'show' : 'hide'}>
                            <img className='carousel-img' src={card.img} alt={card.alt} />
                            <div className='carousel-text'>
                                <h3>{card.name}</h3>
                                <p>{card.caption}</p>
                                <a href={card.url}>Live View</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} size='4x' 
                className='arrow-right'
                onClick={handleClickRight}/>
        </div>
    )
}
