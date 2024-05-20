"use client"
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { updateControl } from "@/src/redux/features/controlsSlice";
import  DrawerLayout  from "@/src/components/shared/DrawerLayout";
import MyAds from "./components/MyAds";
import NeedToConnectComponent from "@/src/components/shared/NeedToConnectComponent";
import { logout } from "@/src/redux/features/authSlice";
import {useRouter} from "next/navigation";


const AdminPage = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const showMyAdsProperty = useSelector((state: RootState) => state.controls.values.showMyAdsProperty);
  const onOpen = () => dispatch(updateControl({ showMyAdsProperty: true }));
  const onClose = () => dispatch(updateControl({ showMyAdsProperty: true }));
  const auth = useSelector((state: RootState) => state.auth);
  if(!auth.isAuthenticated) return <NeedToConnectComponent />
  const onDisconnect = () => {
    dispatch(logout())
    router.push("/auth")
  }
  return (
    <>
      {
        showMyAdsProperty && (
          <DrawerLayout open={showMyAdsProperty} onClose={onClose}>
          <MyAds />
        </DrawerLayout>
        )
      }
      <div className="flex flex-col items-center justify-start h-12/12 pb-20 overflow-y-scroll">
        <div className="w-full flex justify-between items-center p-4 pt-14">
          <Link href="/">
            <IoMdArrowRoundBack className="font-light h-8 w-8" />
          </Link>
          <p className="text-xl font-semibold">Profile</p>
          <p>...</p>
        </div>
        {/* profile */}
        <div className="flex justify-start items-center gap-2 w-full px-2 py-4">
          <Image src="/images/profil-icon.jpeg" alt="profile" width={70} height={70} className="rounded-full" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">Alpha Diallo</p>
            <p className="text-sm font-light">a.diallo3012@gmail.com</p>
          </div>
        </div>
        {/* button edit profile */}
        <div className="flex justify-center items-center w-full px-2 py-4">
          <button className="w-full bg-blue-400 text-white px-4 py-2 rounded-[10px]">Modifier le profile</button>
        </div>
        <div className="w-full flex flex-col gap-8 p-2">
          <div onClick={onOpen} className="w-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <CiBoxList className="text-blue-700 p-1 bg-blue-50 rounded-lg h-8 w-8" />
              <p className="font-semibold text-lg">
                Mes annonces
              </p>
            </div>
            <FaChevronRight className="text-gray-800 h-6 w-6" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <IoBookmarksOutline className="text-blue-700 p-1 bg-blue-50 rounded-lg h-8 w-8" />
              <p className="font-semibold text-lg">
                Mes favoris
              </p>
            </div>
            <FaChevronRight className="text-gray-800 h-6 w-6" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <MdOutlineMessage className="text-blue-700 p-1 bg-blue-50 rounded-lg h-8 w-8" />
              <p className="font-semibold text-lg">
                Mes messages
              </p>
            </div>
            <FaChevronRight className="text-gray-800 h-6 w-6" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <CiSettings className="text-blue-700 p-1 bg-blue-50 rounded-lg h-8 w-8" />
              <p className="font-semibold text-lg">
                Paramètres
              </p>
            </div>
            <FaChevronRight className="text-gray-800 h-6 w-6" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <IoIosHelpCircleOutline className="text-blue-700 p-1 bg-blue-50 rounded-lg h-8 w-8" />
              <p className="font-semibold text-lg">
                Aide
              </p>
            </div>
            <FaChevronRight className="text-gray-800 h-6 w-6" />
          </div>
          <div onClick={onDisconnect} className="w-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <IoIosLogOut className="text-blue-700 p-1 bg-blue-50 rounded-lg h-8 w-8" />
              <p className="font-semibold text-lg">
                Se déconnecter
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default AdminPage;