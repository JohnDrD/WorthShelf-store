import { useEffect, useState } from "react";
import type { ProductCardParams } from "./ProductCard.interface";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ProductDetails } from "../ProductDetails/productDetails";
import closeIcon from "/x-solid.svg"
import { setAmountNumber, setProductId, useAppDispatch, useAppSelector } from "../../store/store.config";
export const ProductCard = (item: ProductCardParams) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const storeItem= useAppSelector((state) => state.product.productData);

    useEffect(()=>{
      if(storeItem==item.uuid){
        console.log(storeItem)
        open();
      }
    },[])
    const open = () => {
      dispatch(setProductId(item.uuid));
      dispatch(setAmountNumber(0))
      setIsOpen(true);
    };

    const close = () => {
      dispatch(setProductId(""));
      setIsOpen(false);
    };

    return (
      <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer" onClick={()=>open()}>
        <div className="w-full h-60 relative p-2 group">
          <img
            src={item?.images[0]}
            alt="productImage"
            className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"
          />
        </div>
        <div className="flex flex-col gap-2 px-2 pb-2">
          <h3 className="text-xs uppercase font-semibold text-lightText">
            {item?.unitValue + " USD"}
          </h3>
          <h2 className="text-lg font-bold line-clamp-2">{item?.name}</h2>
        </div>
        <Dialog  open={isOpen} onClose={()=> close()} 
            transition
        className=" fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
            >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="space-y-4 border bg-white py-4 px-8">
            <DialogTitle>
            <div className="flex gap-4 flex-row-reverse text-lg">
              <Button style={{color:"red"}} onClick={() => close()}>
              <img src={closeIcon} className="w-4" alt="close" />
              </Button>
            </div>
            </DialogTitle>
          <ProductDetails uuid={item.uuid} name={item.name} unitValue={item.unitValue}
           stock={item.stock} 
           description={item.description} 
           images={item.images} 
           dateCreated={item.dateCreated}></ProductDetails>
          </DialogPanel>
        </div>
      </Dialog>
      </div>
    );
  };