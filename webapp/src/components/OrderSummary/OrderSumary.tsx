import { TransactionSummary } from '../../interfaces/transactionSummary.interfcae';

const TransactionModal = ({data,onClose}:{data?: TransactionSummary, onClose:any}) => {
  return (
        <div className="container rounded items-center justify-center w-fit md:w-screen lg: w-screen max-h-96  md:max-h-dvh lg:max-h-dvh overflow-y-auto">
            <div >
            <h1 className='text-lg text-center py-2'>Summary</h1>
            <h1>id: {data?.uuid}</h1>
            <h1> Total Amount : {data?.total}</h1>
            <h1>Products: </h1>
            <hr />
            {(data?.productsList??[]).map((product)=>{
                        return(<>
                        <div key={product.uuid} className="w-2/3 h-60 relative p-2 mx-auto">
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
            <h2>{data?.deliveryInfo?.country}, {data?.deliveryInfo?.address}</h2>
            <h3>{data?.deliveryInfo?.postCode}</h3>
            <h3>{data?.userInfo?.name}</h3>
            <button onClick={onClose} className="rounded bg-gray-600 py-2 px-4 text-md md:text-xl lg:text-lg text-white data-[hover]:bg-gray-500 data-[active]:bg-gray-700 mx-2">
              Ok
            </button>
            </div>
          
        </div>
  );
};

export default TransactionModal;