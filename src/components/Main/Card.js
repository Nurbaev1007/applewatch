import React from 'react';


const Card = ({product, setProducts, products, setPopupBuyOpen}) => {

    const {image,title,price,id} = product;
    const deleteCardHandler = id => setProducts(products.filter(item => item.id !== id));
    const buyCardHandler = (title,image,price) => {
        setPopupBuyOpen({
            name: title,
            imageUrl: image,
            price: price,
            buy: true
        });
        setTimeout(() => {
          setPopupBuyOpen({
              name: '',
              imageUrl: '',
              price: null,
              buy: false
          })
        }, 2000)
    };

    return (
        <div className="content__card">
            <img className='content__card-img' src={image} alt=""/>
            <h2 className="content__card-title">{title}</h2>
            <p className='content__card-price'>{title !== 'Apple Card' ? `$${price}.00` : price}</p>
            <div className="content__card-btns">
                <button className='content__card-btn' type='button' onClick={() => buyCardHandler(title,image,price)}>{title === 'Apple Card' ? 'Apply' : 'Buy'}</button>
                <button type='button' className='content__card-btn' onClick={() => deleteCardHandler(id)}>delete</button>
            </div>
        </div>
    );
};

export default Card;