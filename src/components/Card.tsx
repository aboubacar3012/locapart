"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import DrawerLayout from './shared/DrawerLayout';
import { clearControls, updateControl } from '../redux/features/controlsSlice';
import { PropertyType } from '../types/propertyType';
import { formatPrice } from '../utils/formatPrice';
import Link from 'next/link';

type CardProps = {
  type: "horizontal" | "vertical";
  property: PropertyType,
};

const Card = ({ type, property }: CardProps) => {
  const dispatch = useDispatch();
  const resetControls = () => dispatch(clearControls());
  if (!property) return null;
  return (
    <>
      <Link onClick={resetControls} href={`/property/${property.id}`} className={`relative ${type === "horizontal" ? 'min-w-[15rem]' : 'w-[23rem]'} bg-white shadow-lg rounded-[20px]`}>
        <img
          src={property.image}
          alt="Hero image"
          width={400}
          height={200}
          className={`rounded-[20px] h-[10rem] ${type === "horizontal" ? 'min-w-[15rem]' : 'h-[13rem]'}`}
        />
        {/* <CiHeart className="absolute right-2 top-2 text-white h-8 w-8 bg-gray-500 rounded-full p-1" /> */}
        <div className="flex flex-col items-start justify-center px-2 pb-4 pt-2">
          <h3 className="w-full text-m font-bold truncate ... ">{property.title}</h3>
          <p className="w-full text-xs ">{property.description}</p>
          <p className="text-sm font-bold">Prix: {formatPrice(property.price)}</p>
        </div>
      </Link>
    </>
  );
}

export default Card;