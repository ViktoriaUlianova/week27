import React from 'react'



function Card(props) {
    const { nameRate, priceRate, speedRate, isSelected } = props;
    return (
        <div className={`card ${isSelected?'selected':''}`}>
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
