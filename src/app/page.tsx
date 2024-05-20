"use client"

import Image from "next/image";
import BottomTab from "../components/shared/BottomTab";
import Hero from "../components/Hero";
import { CiHeart } from "react-icons/ci";
import Card from "../components/Card";
import { getProperties, getLatestProperties } from "../data/data"
import DrawerLayout from "../components/shared/DrawerLayout";
import SingleProperty from "../components/SingleProperty";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateControl } from '../redux/features/controlsSlice';
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const properties = getProperties();
  const latests = getLatestProperties();
  const auth = useSelector((state: RootState) => state.auth);
  if(!auth.isAuthenticated) return router.push("/auth");


  return (
    <main className="scrollbar-hide relative m-auto flex flex-col  max-w-[430px] ">
      <Hero />
      <section className="flex flex-col background">
        <h2 className="px-4 text-2xl font-bold py-4">Propriétés récentes</h2>
        <div className="px-4 w-screen flex gap-4 flex-no-wrap scrollbar-hide overflow-x-scroll py-2">
          {
            latests.map((property, index) => <Card key={property.id} type="horizontal" property={property} />)
          }
        </div>
      </section>
      <section className="flex flex-col background">
        <h2 className="text-2xl font-bold px-4 pb-1 pt-4">
          Toutes les propriétés
        </h2>
        <div className=" flex flex-col justify-center items-center gap-4 py-2 w-full no-scrollbar">
          {
            properties.map((property, index) => <Card key={property.id} type="vertical" property={property} />)
          }
        </div>
      </section>
      <div className="mt-24"></div>
    </main>
  );
}
