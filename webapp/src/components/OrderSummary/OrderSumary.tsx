import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { TransactionSummary } from '../../interfaces/transactionSummary.interfcae';

const TransactionModal = ({data,isOpen,onClose}:{data?: TransactionSummary,isOpen:boolean, onClose:any}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} transition
    className=" fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
      <div className="modal-overlay">
        <div className="modal-content">
          <DialogTitle className="bg-white mx-auto">
            <h1 className='text-lg text-center py-2'>Summary</h1>
            </DialogTitle>
          <DialogPanel className="space-y-4 border bg-white py-4 px-8">
            <h1> Total Amount : {data?.total}</h1>
            <h1>Products: </h1>
            <hr />
            {(data?.productsList??[]).map((product)=>{
                        return(<>
                        <div className="w-2/3 h-60 relative p-2 mx-auto">
                <img
                  src={product.images[0]}
                  alt="productImage"
                  className="w-full h-full rounded-md"
                />
              </div>
                            <h1 className="mt-5 mb-2 text-4xl uppercase font-bold line-clamp-2">
                  {product.name}
                </h1>
                <h1 className="text-md line-clamp-2 ">
                    {product.unitValue} USD
                </h1>
                        </>)
                    })}

            <hr />
            <h1>Delivery Info</h1>
            <hr />
            <h2>{data?.deliveryInfo?.country}, {data?.deliveryInfo?.city}, {data?.deliveryInfo?.address}</h2>
            <h3>{data?.deliveryInfo?.postCode}</h3>
            <h3>{data?.userInfo?.name}</h3>
            <button onClick={onClose} className="rounded bg-gray-600 py-2 px-4 text-md md:text-xl lg:text-lg text-white data-[hover]:bg-gray-500 data-[active]:bg-gray-700 mx-2">
              Ok
            </button>
          </DialogPanel>

        </div>
      </div>
    </Dialog>
  );
};

export default TransactionModal;