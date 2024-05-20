"use client";

import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { updateControl } from "../redux/features/controlsSlice";
import { RootState } from "../redux/store";

const Hero = () => {
  const dispatch = useDispatch();
  const onOpen = () => dispatch(updateControl({ showSearchProperty: true }));
  
  return (
    <div className="relative bg-contain  text-white px-4 pt-8 flex flex-col items-center justify-center h-[25vh] w-full rounded-b-[50px] leading-10">
      <div className="absolute inset-0 bg-[url('https://www.luxe-infinity.com/wp-content/uploads/2019/03/SAOTA_ZA_OVD919_2-A-Award-1.jpg')] bg-cover rounded-b-[50px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-b-[50px]"></div>
      <h1 className="text-3xl font-bold relative z-10">
        Bienvenue sur Locapart
      </h1>
      <p className="text-lg mt-2 relative z-10">
        Trouvez votre logement idéal en un clic !
      </p>
      <div onClick={onOpen} className="relative rounded-[20px] backdrop-blur-md bg-white/20 flex flex-row items-center justify-center mt-4">
        <CiSearch className="absolute left-4 text-gray-100 h-6 w-6" />
        <button
          type="button"
          className="blur-xs border-gray-300   py-4 w-[300px] text-sm"
        >Rechercher votre logement</button>
      </div>
    </div>
  );
}

export default Hero;