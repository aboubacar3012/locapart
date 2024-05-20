"use client";

import { BiCategoryAlt } from "react-icons/bi";
import { TbFilterSearch } from "react-icons/tb";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import SearchComponent from "../SearchComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import  DrawerLayout  from "./DrawerLayout";
import { updateControl, clearControls } from "@/src/redux/features/controlsSlice";
import Link from "next/link";
import {usePathname} from "next/navigation";

const BottomTab = () => {
  const pathname = usePathname()
  const dispatch = useDispatch();
  const showSearchProperty = useSelector((state: RootState) => state.controls.values.showSearchProperty);
  const onOpen = () => dispatch(updateControl({ showSearchProperty: true }));
  const onClose = () => dispatch(updateControl({ showSearchProperty: false }));

  if(pathname.includes("/auth") || pathname.includes("/property") ) return null;

  console.log(pathname)
  
  return (
    <div>
      {showSearchProperty && (
        <DrawerLayout open={showSearchProperty} onClose={onClose}>
          <SearchComponent />
        </DrawerLayout>
      )}
      <div className="bg-black text-white fixed bottom-4 inset-x-0  flex flex-row justify-around items-center py-4 shadow-xl w-11/12 m-auto rounded-[50px]">
        <Link href="/" className="flex flex-col items-center">
          <BiCategoryAlt className={`${pathname === "/" ? "text-gray-300" : "text-gray-500"} h-8 w-8`} />
        </Link>
        <article onClick={onOpen} className="flex flex-col items-center">
          <TbFilterSearch className="text-gray-500 h-8 w-8" />
        </article>
        {/* <a href="/" className="flex flex-col items-center">
          <IoBookmarksOutline className="text-gray-500 h-8 w-8" />
        </a> */}
        <Link href="/admin" className="flex flex-col items-center">
          <FaRegUser className={`${pathname === "/admin" ? "text-gray-300" : "text-gray-500"} h-8 w-8`} />
        </Link>
      </div>
    </div>
  );
}

export default BottomTab;