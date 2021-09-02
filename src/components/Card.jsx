import React, { useState } from 'react'



function Card(props) {
    const { nameRate, priceRate, speedRate } = props;
    const [isSelected, setIsSelected ] = useState(false);
    const handleChange = () => {
        setIsSelected(!isSelected)
    }
    return (
        <div onClick={handleChange} className={`card ${isSelected?'selected':''}`}>
            <div className="card-header">
                Безлимитный {nameRate}
                <div className="card-header-name">
                    
                    </div>
            </div>
            <div className="card-section1">
            <div className="card-section1-price">
            {priceRate} руб/мес
            </div>
            </div>
            <div className="card-section2">
                <div className="card-section2-speed">
                до {speedRate} Мбит/сек
                </div>
            </div>
            <div className="card-footer">
            <div className="card-footer-condition">
            Объем включенного трафика не ограничен
            </div>
            </div>
        </div>
    )
}

export default Card
