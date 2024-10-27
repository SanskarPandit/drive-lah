import React, { useState, useEffect } from 'react';
import './PlanCard.css';
import { AiOutlineEnvironment } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa"; 

const PlanCard = ({ cardDetails }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState("");
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardInput, setCardInput] = useState("");

  useEffect(() => {
    const storedCard = JSON.parse(localStorage.getItem('selectedCard'));
    const storedAddOn = localStorage.getItem('selectedAddOn');
    const storedCardInput = localStorage.getItem('cardInput');

    if (storedCard) {
      setSelectedCard(storedCard);
      if (storedCard.title === "Good mates" || storedCard.title === "Best mates") {
        setShowCardDetails(true);
      }
    }
    if (storedAddOn) setSelectedAddOn(storedAddOn);
    if (storedCardInput) setCardInput(storedCardInput);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
    localStorage.setItem('selectedAddOn', selectedAddOn);
    localStorage.setItem('cardInput', cardInput);
  }, [selectedCard, selectedAddOn, cardInput]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setSelectedAddOn("");
    if (card.title === "Good mates" || card.title === "Best mates") {
      setShowCardDetails(true);
    } else {
      setShowCardDetails(false);
    }
  };

  const handleAddOnSelect = (event) => {
    setSelectedAddOn(event.target.value);
  };

  const handleCardInputChange = (event) => {
    setCardInput(event.target.value);
  };

  return (
    <div>
      <div className='card'>
        {cardDetails.map((card, index) => (
          <div 
            key={index} 
            className={`card-container ${selectedCard?.title === card.title ? 'active' : ''}`} 
            onClick={() => handleCardClick(card)}
          >
            <h1 className="card-heading">{card.title}</h1>
            <div className="description-container">
              <div className="description-item">
                <AiOutlineEnvironment className='icon' />
                <p>{card.gps}</p>
              </div>
              <div className="description-item">
                <IoSpeedometerOutline className='icon' />
                <p>{card.mileage}</p>
              </div>
              <div className="description-item">
                <MdOutlineLock className="icon" />
                <p>{card.keyHandover}</p>
              </div>
            </div>
            <div className="card-price">
              <h5>{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && selectedCard.addOns && (
        <div className="add-on-selection">
          <div className='add-on-heading'>
            <p>Select add-ons for your subscription</p>
          </div>
          {selectedCard.addOns.map((addOn, indx) => (
            <div key={indx} className="add-on-card">
              <span className="add-on-text">{addOn}</span>
              <input 
                type="radio" 
                name="addOn"
                value={addOn} 
                checked={selectedAddOn === addOn} 
                onChange={handleAddOnSelect} 
                className="add-on-radio" 
              />
            </div>
          ))}
        </div>
      )}

      {selectedCard && showCardDetails && (
        <div className="add-on-selection">
          <div className='add-on-heading'>
            <p>Add card details</p>
          </div>
          <div className="payment-card">
            <div className="card-input">
              <div className="input-with-icon">
                <FaCreditCard className="input-icon" /> 
                <input 
                  type="text" 
                  placeholder="1234 5678 1234 5678                                MM/YY   CVC"
                  value={cardInput}
                  onChange={handleCardInputChange}
                  className="input-field"
                />
              </div>
            </div>
            <p className="payment-info">
              You will not be charged right now. Subscription will only start once your listing is published and live.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
