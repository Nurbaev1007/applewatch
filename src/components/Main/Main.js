import React, {useState} from 'react';
import './main.css'
import Airpods from '../../assets/main/img1.png'
import Iphone from '../../assets/main/img2.png'
import TV from '../../assets/main/img3.png'
import AppleCard from '../../assets/main/img4.png'
import Card from "./Card";
import Popup from "./Popup/Popup";
import PopupBuy from "./PopupBuy/PopupBuy";


const Main = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Airpods',
            price: 119.00,
            image: Airpods
        },
        {
            id: 2,
            title: 'Iphone XR',
            price: 700.00,
            image: Iphone
        },
        {
            id: 3,
            title: 'Apple TV 4K',
            price: 179.00,
            image: TV
        },
        {
            id: 4,
            title: 'Apple Card',
            price: 'Free',
            image: AppleCard
        },
        {
            id: 5,
            title: 'Airpods',
            price: 119.00,
            image: Airpods
        },
        {
            id: 6,
            title: 'Iphone XR',
            price: 700.00,
            image: Iphone
        },
        {
            id: 7,
            title: 'Apple TV 4K',
            price: 179.00,
            image: TV
        },
        {
            id: 8,
            title: 'Apple Card',
            price: 'Free',
            image: AppleCard
        },
    ]);
    const [all, setAll] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupBuyOpen, setPopupBuyOpen] = useState({
        name: '',
        imageUrl: '',
        price: null,
        buy: false
    });
    // const deleteCardHandler = (id) =>{
    //   setProducts(products.filter((item) => item.id === id))
    // };

    return (
        <main className='main'>
            <div className="container">
                <section className='content'>
                    <div className='content__header'>
                        <h2 className='content__title'>Check also</h2>
                        <p className='content__all' onClick={() => setAll('all')}>See all ></p>
                    </div>

                    <button type='button' className='content__add' onClick={() => setPopupOpen(true)}>Add card</button>

                    {/*<button type='button' onClick={() => deleteCardHandler(products.length)}>Delete</button>*/}
                    <div className="content__row">


                        {products.filter((product,idx) => {
                            if (all.length === 0) {
                                return idx < 4
                            } else {
                                return product
                            }
                        }).map((item, idx) => (
                            <Card popupBuyOpen={popupBuyOpen} setPopupBuyOpen={setPopupBuyOpen} setProducts={setProducts} products={products} key={item.id} product={item}/>
                        ))}


                        {/*<Card title='Iphone XR' price ='$799.00$' image={Iphone}/>*/}
                        {/*<Card title='Apple TV 4K' price ='$179.00$' image={TV}/>*/}
                        {/*<Card title='Apple Card' price ='Free*' image={AppleCard}/>*/}
                    </div>

                    {
                        all.length !== 0 ? <p style={{
                            textAlign: 'center',
                            marginTop: 40 + 'px',
                            cursor: 'pointer',
                            backgroundColor: '#e5e5e5',
                            padding: 5 + 'px'
                        }} onClick={() => setAll('')}>Скрыть</p> : ''

                    }

                </section>
            </div>
           <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen} products={products} setProducts={setProducts}/>
           <PopupBuy popupBuyOpen ={popupBuyOpen} setPopupBuyOpen={setPopupBuyOpen}/>
        </main>
    );
};

export default Main;