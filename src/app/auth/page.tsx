"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const WelcomePage = () => {
  return (
    <div className="relative h-screen flex justify-center">
      {/* Le nom de mon entreprrise */}
      <img
        src="https://fazarchitecte.files.wordpress.com/2021/09/camara-sydi-facade-arriere-edited-2.jpg"
        alt="homeV2"
        // width={1920}
        // height={1080}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-28 text-center">
        <h1 className="text-5xl text-white font-bold">Locapart</h1>
        <p className="text-white text-md">Trouvez votre logement idéal en un clic !</p>
      </div>
      <div className="absolute flex flex-col justify-center items-center gap-4 bottom-16 left-1/2 transform -translate-x-1/2  w-full px-4">
        <p className="text-white text-lg text-center mb-10 px-1">
          <span className="block w-full">Vous êtes à la recherche d&apos;un logement ?</span>
          <span className="block w-full">Locapart est la solution pour vous.</span>
          <span className="block w-full">Trouvez votre logement idéal en un clic !</span>
        </p>
        <Link href="/auth/login" className="bg-blue-500  text-white font-bold py-4 px-12 rounded-[20px] w-4/5 text-center ">
          Se connecter
        </Link>
        <Link href="/auth/registration" className="bg-gray-500  font-bold py-4 px-12 rounded-[20px] w-4/5 text-center ">
          Créer un compte
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
