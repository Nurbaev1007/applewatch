import React from 'react';
import './popupBuy.css'
import Airpods from '../../../assets/main/img1.png'

const PopupBuy = ({popupBuyOpen, setPopupBuyOpen}) => {

    // const closePopupOpen = (e) => {
    //     if (e.target.className === 'popup-buy__overlay') {
    //         setPopupBuyOpen(false)
    //     }
    //
    // };

    const {buy,name, price, imageUrl} = popupBuyOpen;
    return (
        <div className="popup-buy__overlay" style={{display: popupBuyOpen.buy === true ? 'flex' : 'none'}} onClick={buy}>
            <div className="popup-buy__popup">
                <h2 className='popup-buy__title'>Спасибо за покупку</h2>
                <img src={imageUrl} alt={name} className='popup-buy__image'/>
                <h3 className='popup-buy__subtitle'>{name}</h3>
                <p className='popup-buy__price'>Цена затовар : {name === 'Apple Card' ? '' : '$'} {price}</p>
                {/*<div className="popup-buy__close" onClick={() => setPopupBuyOpen(false)}/>*/}
            </div>
        </div>
    );
};

export default PopupBuy;