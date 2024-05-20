"use client";

import { updateControl } from "@/src/redux/features/controlsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CarForm = () => {
  const [edit, setEdit] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const onClose = () => dispatch(updateControl({ showFormProperty: false }));

  let title = "Ajout";
  if (edit) {
    title = "Modification";
  }
  let submitText = "Ajouter";
  if (edit) {
    submitText = "Enregistrer";
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="w-full flex flex-col items-center justify-start h-screen pb-20 px-4">
      <h1 className="w-full text-3xl font-bold text-gray-800 text-center ">
        {title}
      </h1>
      <form className="h-screen overflow-y-scroll">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Titre"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              className="p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Prix en GNF</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Prix"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="caution">Caution en GNF</label>
            <input
              type="number"
              id="caution"
              name="caution"
              placeholder="Caution"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type">Type location</label>
            <select
              id="type"
              name="type"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="day">Par jour</option>
              <option value="week">Par semaine</option>
              <option value="month">Par mois</option>
              <option value="year">Par an</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="surface">Surface en m2</label>
            <input
              type="number"
              id="surface"
              name="surface"
              placeholder="Surface en m2"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bedrooms">Nombre de chambres</label>
            <select
              id="bedrooms"
              name="bedrooms"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bathroom">Nombre de salle de bains</label>
            <select
              id="bathroom"
              name="bathroom"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="toilets">Nombre de toilettes</label>
            <select
              id="toilets"
              name="toilets"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="livingrooms">Nombre de salons</label>
            <select
              id="livingrooms"
              name="livingrooms"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            {/* Equipement */}
            <h3>Équipements</h3>
            <div className="flex flex-wrap gap-2 ">
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="wifi">Wifi</label>
                <input type="checkbox" id="wifi" name="Wifi" />
              </div>
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="parking">Parking</label>
                <input type="checkbox" id="parking" name="Parking" />
              </div>
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="eauchaude">Eau chaude</label>
                <input type="checkbox" id="eauchaude" name="Eau chaude" />
              </div>
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="gardien">Gardien</label>
                <input type="checkbox" id="gardien" name="Gardien" />
              </div>
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="machinealaver">Machine a laver</label>
                <input type="checkbox" id="machinealaver" name="Machine a laver" />
              </div>
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="chauffage">Chauffage</label>
                <input type="checkbox" id="chauffage" name="Chauffage" />
              </div>
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md">
                <label htmlFor="climatisation">Climatisation</label>
                <input type="checkbox" id="climatisation" name="Climatisation" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded-md"
            >
              {submitText}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={onClose}
              type="button"
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Retour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
