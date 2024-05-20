"use client"
import React, { useState } from 'react';

const OrderPage = () => {
  const [promoCode, setPromoCode] = useState('');
  const [restaurantComment, setRestaurantComment] = useState('');
  const [deliveryComment, setDeliveryComment] = useState('');

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleRestaurantCommentChange = (e) => {
    setRestaurantComment(e.target.value);
  };

  const handleDeliveryCommentChange = (e) => {
    setDeliveryComment(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Livraison</h2>
      <p>Votre commande sera livrée à l'adresse suivante:</p>
      <p className="mb-4">Rue Junot, 13003 Marseille, France</p>
      <p className="mb-4">Délais: Dans 15 à 25 min</p>

      <div className="mb-4">
        <h3 className="font-bold mb-2">Ma commande</h3>
        <p>Menu Xduo (25.00 €)</p>
        <p>Nuggets x4</p>
        <p>Nuggets x4</p>
        <p>Canette 33cl - Coca Cola</p>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Couvert</label>
        <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
      </div>

      <p className="mb-4">Rémunération de votre livreur: 5.00 €</p>
      <div className="bg-yellow-300 text-black p-2 rounded mb-4">
        Économisez jusqu'à 5€ sur la livraison avec le code NOJYK5OFF!
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="promoCode">Code promo :</label>
        <input
          type="text"
          id="promoCode"
          value={promoCode}
          onChange={handlePromoCodeChange}
          className="w-full px-3 py-2 text-black rounded"
        />
        <button className="bg-blue-600 text-white px-3 py-2 mt-2 rounded">Appliquer</button>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="restaurantComment">Commentaire pour le restaurateur :</label>
        <textarea
          id="restaurantComment"
          value={restaurantComment}
          onChange={handleRestaurantCommentChange}
          className="w-full px-3 py-2 text-black rounded"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="deliveryComment">Commentaire pour le livreur :</label>
        <textarea
          id="deliveryComment"
          value={deliveryComment}
          onChange={handleDeliveryCommentChange}
          className="w-full px-3 py-2 text-black rounded"
          rows="3"
        />
      </div>

      <button className="bg-blue-600 text-white w-full py-3 rounded">Commander pour 30.00€</button>
    </div>
  );
};

export default OrderPage;
