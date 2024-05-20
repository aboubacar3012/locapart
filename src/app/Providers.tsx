"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { PropsWithChildren, useEffect } from "react";
import SearchComponent from "../components/SearchComponent";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BottomTab from "../components/shared/BottomTab";


export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider>
          {children as any}
          <BottomTab />
          
          <ToastContainer
            stacked
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
