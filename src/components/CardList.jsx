import React from 'react'
import Card from './Card'

const cards = [
    {
        nameRate: "300",
        priceRate: "300",
        speedRate: "10",
    },
    {
        nameRate: "450",
        priceRate: "450",
        speedRate: "50",
    },
    {
        nameRate: "550",
        priceRate: "550",
        speedRate: "100",
    },
    {
        nameRate: "1000",
        priceRate: "1000",
        speedRate: "200",
    },
]

function CardList() {
    return (
        <div className="card-list"> 
            {cards.map((card) => (
                <Card
                nameRate={card.nameRate}
                priceRate={card.priceRate}
                speedRate={card.speedRate}
                
                />

            ))}
        </div>
    )
}

export default CardList
