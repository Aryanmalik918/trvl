import React from 'react';
import CardItem from './CardItem';
import './Card.css';


function Card() {
    return (
        <div className="cards">
            <h1>check out these  EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall  deep inside the Amazon forest'
                            label='Adventures'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of the Bali in private Cruise '
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience football at the top of the Himalaya Mountain'
                            label='Adventures'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara desert on a guided camel tour'
                            label='Adrenaline'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail  in the Atlantic Ocean visiting uncharted waters'
                            label='Mystery'
                            path='/services'
                        />


                    </ul>

                </div>


            </div>



        </div>
    )
}

export default Card;
