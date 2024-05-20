import  DrawerLayout  from "@/src/components/shared/DrawerLayout";
import { updateControl } from "@/src/redux/features/controlsSlice";
import { RootState } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { getProperties } from "@/src/data/data"
import Card from "@/src/components/Card";



const MyAds = () => {
  const dispatch = useDispatch();

  const showFormProperty = useSelector((state: RootState) => state.controls.values.showFormProperty);
  const onOpenForm = () => dispatch(updateControl({ showFormProperty: true }));
  const onCloseForm = () => dispatch(updateControl({ showFormProperty: false }));
  const onCloseAds = () => dispatch(updateControl({ showMyAdsProperty: false }));
  const properties = getProperties();
  return (
    <div>
      {
        showFormProperty && (
          <DrawerLayout open={showFormProperty} onClose={onCloseForm}>
            <Form />
          </DrawerLayout>
        )
      }
     <div className="w-full flex flex-col items-center justify-start h-screen overflow-scroll pb-32">
        <h1 className="w-full text-3xl font-bold text-gray-800 text-center bg-blue-200 rounded-3xl mt-4 p-2 py-4">
          Mes annonces
        </h1>
        <button
          className="z-50 fixed bottom-4 right-4 bg-blue-500 text-3xl text-white px-6 py-3 rounded-2xl"
          onClick={onOpenForm}
        >
          +
        </button>
        <button
          className="z-50 fixed bottom-4 left-4 bg-gray-500 text-3xl text-white px-6 py-3 rounded-2xl"
          onClick={onCloseAds}
        >
          Retour
        </button>
        <div className="flex gap-2 justify-between items-center px-2 py-4">
          <h2 className="text-xl font-semibold text-gray-800 hover:bg-blue-400 rounded-xl px-4 py-2">
            Brouillons
          </h2>
          <h2 className="text-xl font-semibold text-gray-800 bg-blue-400 rounded-xl px-4 py-2">
            Publiés
          </h2>
          <h2 className="text-xl font-semibold text-gray-800 hover:bg-blue-400 rounded-xl px-4 py-2">
            Archivés
          </h2>
        </div>

        <div className=" flex flex-col justify-center items-center gap-4 py-2 w-full no-scrollbar">
          {
            properties.map((property, index) => <Card key={property.id} type="vertical" property={property} />)
          }
        </div>
      </div>
    </div>
  );
}

export default MyAds;