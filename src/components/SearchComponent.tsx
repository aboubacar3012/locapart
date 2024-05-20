"use client"
import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { CiFilter, CiSearch } from "react-icons/ci";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { updateControl } from "../redux/features/controlsSlice";
import { properties } from "../data/data";
import { PropertyType } from "../types/propertyType";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [propertyToShow, setPropertyToShow] = useState<PropertyType[]>(properties);

  const closeDrawer = () => dispatch(updateControl({ showSearchProperty: false }));


  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Exécute le code uniquement du côté client
    if (typeof window !== 'undefined') {
      const size = window.innerHeight;
      setWindowSize(size);
    }
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const filteredProperties = properties.filter((property) => {
        return property.title.toLowerCase().includes(search.toLowerCase());
      });
      setPropertyToShow(filteredProperties);
    } else {
      setPropertyToShow(properties);
    }
  }
  , [search]);

  if (windowSize === undefined) return null;

  
  return (

    <div className="w-screen flex flex-col items-center justify-start h-screen pb-20 overflow-y-scroll">
      <div className="w-full flex items-center justify-between p-4 pt-10">
        <IoMdClose className="h-8 w-8 text-2xl" onClick={closeDrawer} />
        <h2 className="text-lg font-semibold">Recherche</h2>
        <CiFilter className="h-8 w-8 text-2xl" />
      </div>

      <div className="w-full  flex flex-row items-center justify-center mt-6 px-4">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Rechercher votre logement"
          className="relative border blur-xs border-gray-300 rounded-[20px] pl-10 py-4 w-full text-sm"
        />
        <CiSearch className="absolute left-6 text-gray-400 h-6 w-6" />
      </div>

      
      <div className="w-full flex flex-row items-center overflow-x-scroll scrollbar-hide gap-4 mt-4 px-4">
        <button className="bg-blue-300 text-gray-100 px-4 py-2 rounded-[20px]">Tous</button>
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-[20px]">Appartements</button>
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-[20px]">Maisons</button>
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-[20px]">Chambres</button>
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-[20px]">Bureaux</button>
        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-[20px]">Magasins</button>
      </div>
      <section className="flex flex-col">
        <h2 className="text-2xl font-bold pb-1 pt-4">Résultats</h2>
        <p className="text-sm font-light p-0">{propertyToShow.length} propriétés trouvées</p>
        <div className="h-[35rem] scrollbar-hide overflow-y-scroll flex flex-col items-center gap-4 py-2 w-full">
          {
            propertyToShow.map((property, index) => <Card key={property.id} type="vertical" property={property} />)
          }
        </div>
      </section>
    </div>
  );
}

export default SearchComponent;