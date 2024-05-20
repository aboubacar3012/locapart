"use client";
import React, { memo, useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateControl } from "@/src/redux/features/controlsSlice";


type DrawerLayoutProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const DrawerLayout = ({ open,onClose, children }: DrawerLayoutProps) => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();


  useEffect(() => {
    // Exécute le code uniquement du côté client
    if (typeof window !== 'undefined') {
      const size = window.innerHeight;
      setWindowSize(size);
    }
  }, []);

  if (windowSize === undefined) return null;



  return (
      <Drawer
        overlay={false}
        size={windowSize / 1.06}
        dismiss={{
          enabled: false,
        }}
        placement="bottom"
        open={open}
        onClose={onClose}
        className="overflow-hidden bg-gray-200 rounded-t-[50px] p-4"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="w-full flex flex-col items-center justify-between">
          {children}
        </div>
      </Drawer>
  );
}


export default memo(DrawerLayout);