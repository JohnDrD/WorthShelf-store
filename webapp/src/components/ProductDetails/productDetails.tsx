import { useEffect, useState } from "react";
import type { ProductCardParams } from "../ProductCard/ProductCard.interface";
import { Button, Input } from "@headlessui/react";
import { setAmountNumber, useAppDispatch, useAppSelector } from "../../store/store.config";
import LoginModal from "../LogInModal/LoginModal";
import plusIcon from '../../../public/plus-solid.svg'
import minusIcon from "../../../public/minus-solid.svg";
import DeliveryForm from "../TransactionForm/transactionForm";

export const ProductDetails = ({item, showSummary}:{item: ProductCardParams, showSummary:any}) => {
  const storeItem = useAppSelector((state) => state.user.UserData);

  const [mainImage, setMainImage] = useState(item?.images?.[0] || "");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser]= useState(storeItem)
  const [openLogin, setOpenLogin] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  const [amount, setAmount] = useState(1);

  const dispatch = useAppDispatch();
  
  const checkUser= (valid?:boolean)=>{
    setOpenLogin(false)
    setUser(storeItem)
    if (valid || (user&& user.uuid != "")) {
      return setIsLogged(true);

    }

  }
  useEffect(() => {
    checkUser()
  }, []);

  const add = () => {
    if (amount < item.stock) {
      console.log("in add");
      setAmount(amount + 1);
    }
  };
  const res = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const setAmmount = (e: any) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    if (value >= 1 && value <= item.stock) {
      setAmount(value);
    } else {
      setAmount(1);
    }
  };

  const buy=()=>{
    dispatch(setAmountNumber(amount))
    setOpenLogin(false)
    setOpenTransaction(true)
  }

  const TransactionSummary=(data?:any)=>{
    if(data){
      showSummary(true)
    }
    setOpenLogin(false)
    setOpenTransaction(false)
  }
  return (
    <>
      <div className="container rounded items-center justify-center w-fit md:w-screen lg: w-screen max-h-96  md:max-h-dvh lg:max-h-dvh overflow-y-auto">
        <div className="mx-auto">
          <div className="modal-body">
            <div className="my-3">
              <div className="w-2/3 h-60 relative p-2 mx-auto">
                <img
                  src={mainImage}
                  alt="productImage"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="flex w-10 h-10 mx-4">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${item.name} thumbnail ${index + 1}`}
                    className="thumbnail-image"
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-2">
              <div>
                <h1 className="mt-5 mb-2 text-4xl uppercase font-bold line-clamp-2">
                  {item.name}
                </h1>
                <h1 className="text-md line-clamp-2 ">
                  Price: {item.unitValue} USD
                </h1>
                <p className="text-sm text-lightText">In stock: {item.stock}</p>
              </div>
              <div className="mx-auto my-auto">
                {!isLogged ? (
                  <Button
                    className="rounded bg-sky-600 py-2 px-4 text-md md:text-xl lg:text-2xl text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                    onClick={() => setOpenLogin(true)}
                  >
                    Log In
                  </Button>
                ) : (
                  <div className="justify-items-center py-2">
                    <div className="grid grid-cols-3">
                      
                      <Button
                        className=" justify-items-center"
                        onClick={() => res()}
                      >
                        <img src={minusIcon} className="w-4" alt="close" />
                      </Button>
                      <div className="justify-items-center">
                        <Input
                          id="amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmmount(e)}
                          className="block w-full rounded-md border-1 bg-white/5 outline-none shadow-md focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                        />
                      </div>

                      <Button
                        className=" justify-items-center"
                        onClick={() => add()}
                      >
                        <img src={plusIcon} className="w-4" alt="close" />
                      </Button>
                    </div>
                    <Button
                      className={"rounded  py-2 px-4 text-md md:text-xl lg:text-2xl text-white "
                        +(item.stock==0? " bg-gray-600 data-[hover]:bg-gray-500 data-[active]:bg-gray-700":" bg-sky-600 data-[hover]:bg-sky-500 data-[active]:bg-sky-700")
                      }
                      onClick={() => buy()}
                      disabled={item.stock==0}
                    >
                      Buy
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <hr></hr>
            <p className="text-md mt-5 text-lightText">{item.description}</p>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={openLogin}
        onClose={(valid?:boolean) => {
          checkUser(valid);
        }}
      ></LoginModal>
      <DeliveryForm isOpen={openTransaction} onClose={(data:any)=>{TransactionSummary(data)}}></DeliveryForm>
    </>
  );
};
