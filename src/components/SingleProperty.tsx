"use client"
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { updateControl } from "../redux/features/controlsSlice";
import { PropertyType } from "../types/propertyType";
import { formatPrice } from "../utils/formatPrice";
import { RootState } from "../redux/store";


const SingleProperty = () => {

  const dispatch = useDispatch();
  const closeDrawer = () => dispatch(updateControl({ showSingleProperty: false }));
  const propertyToShow = useSelector((state: RootState) => state.auth.propertyToShow);

  if(!propertyToShow) return null;
  console.log(propertyToShow)
  return (
    <div className="flex flex-col items-center justify-start h-12/12 pb-20 overflow-y-scroll">
      <div className="relative bg-contain text-white px-4 py-4 flex flex-col items-center justify-center h-[28vh] w-full rounded-b-[50px] leading-10">
        <img
          className={`z-0 absolute inset-0 w-full h-full object-cover rounded-[50px]`}
          src={propertyToShow.image}
          alt="Hero Image"
        />        
        <IoMdClose className="absolute left-6 top-2 text-white h-10 w-10 bg-gray-500 rounded-full p-2" onClick={closeDrawer} />
        <CiFilter className="absolute right-6 top-2 text-white h-10 w-10 bg-gray-500 rounded-full p-2" />
      </div>
      <section className="px-4">
        <h2 className="text-xl font-bold pb-1 pt-2">
          {propertyToShow.title}
        </h2>
        <p className="text-md font-bold">Prix: {formatPrice(propertyToShow.price)}/ {propertyToShow.locationType}</p>
        <p className="text-md font-bold">Caution: {propertyToShow.caution} mois</p>
        <p>
          {propertyToShow.description}
        </p>
        <h2 className="text-lg font-bold pb-1 pt-2">
          Informations sur le logements
        </h2>
        <p><span className="font-semibold">Surface:</span> {propertyToShow.surface}m²</p>
        <p><span className="font-semibold">Nombre de chambres:</span> {propertyToShow.rooms}</p>
        <p><span className="font-semibold">Nombre de salles de bain:</span> {propertyToShow.bathrooms}</p>
        <p><span className="font-semibold">Nombre de toilettes:</span> {propertyToShow.toilets}</p>
        <p><span className="font-semibold">Nombre de salons:</span> {propertyToShow.livingrooms}</p>
        <h2 className="text-lg font-bold pb-1 pt-2">
          Equipements
        </h2>
        <div className="flex flex-wrap gap-1">
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Wifi</button>
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Parking</button>
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Eau chaude</button>
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Gardien</button>
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Machine a laver</button>
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Chauffage</button>
          <button className="bg-gray-300 text-gray-600 px-4 py-1 rounded-[10px]">Climatisation</button>
        </div>
      </section>

      <div className="bg-black text-white fixed bottom-3 inset-x-0  flex flex-row justify-around items-center py-2 shadow-xl w-11/12 m-auto rounded-[50px]">
        <div className="flex justify-between items-center w-full px-3">
          <div className="flex flex-col">
            <p className="text-sm font-light">
              Location: Mensuelle
            </p>
            <p className="text-sm font-bold">
              {formatPrice(propertyToShow.price)}
            </p>
          </div>
          <a href="tel:+224623000000" className="flex flex-col items-center bg-white font-bold text-gray-900 px-8 py-4 rounded-[50px]">
            Appeler
          </a>
        </div>
      </div>
    </div>

  );
}

export default SingleProperty;