import { Dialog, DialogPanel, Input } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/store.config";
import axios from "axios";
import { transaction } from "../../interfaces/transaction.interface";

const DeliveryForm = ({isOpen,onClose}:{isOpen:boolean, onClose:any}) => {

    const storeItem= useAppSelector((state) => state.product.productData);
    const stockItem= useAppSelector((state)=> state.amount.amountData)
    const userData= useAppSelector((state)=> state.user.UserData)
    const [cardType, setCardType] = useState('');
    const [isValidCard, setIsValidCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [validStock, setvalidStock]= useState(true)
    const [totalAmount, setTotalAmount]= useState(0)

  const checkStock=()=>{
    if(isOpen){
      axios.get('http://localhost:3000/stocks/'+ storeItem).then( res=>{
        const stock= res.data.data?.stock
          if(stock && stock >= stockItem){
            setvalidStock(true)
            setTotalAmount((res.data.data.unitValue* stockItem)+ 10)
            return
          }
          setvalidStock(false)
       }
       )
    }

  }

  const generateTransaction=async ()=>{
    const wommpiRes="nopt yet";
    const transactionData: transaction={
      total: totalAmount,
      productsList: [{id: storeItem, amount: stockItem}],
      userId: userData.uuid,
      status: "Paid",
      deliveryParams: {
        postCode: formData.postCode,
        country: formData.country,
        city: formData.city,
        address: formData.address,
        status: "generate",
        transactionId: wommpiRes
      },
      transactionID: "wommpiRes"
    }
     const response= (await axios.post("http://localhost:3000/transactions",transactionData,{headers: {Authorization: `Bearer ${userData.token}`}}))

     if(response.status!=200){
      alert("An error has ocurred pleas contatc an administrator")
     }
     else{

      onClose()
     }

     console.log(response)
  }

  useEffect(()=>{
    checkStock()
  })

  useEffect(()=>{
    if(!validStock){
      alert("Sorry no stock for this product")
      onClose()
    }
  },[validStock])
   
    const [formData, setFormData] = useState({
        postCode: '',
        country: '',
        city: '',
        address: ''
      });

    const [creditInfo, setCreditInfo]= useState({
        cardNumber:"",
        expiryDate:"",
        cvv:""
    })
    
      const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleInputChangecard = (event:any) => {
        const { name, value } = event.target;
        setCreditInfo({
          ...creditInfo,
          [name]: value
        });
      };
  
    const handleCardInput = (e:any) => {
      const input = e.target.value;
      setCreditInfo({
        ...creditInfo,cardNumber: input
      });
  
      const type = detectCardType(input);
      setCardType(type);
  
      const valid = validateCardNumber(input);
      setIsValidCard(valid);
    };
  
    const handleSubmit = async (e:any) => {
      await checkStock()
      e.preventDefault();
  
      if (!isValidCard) {
        setErrorMessage('Invalid card number.');
        return;
      }
  
      if (!creditInfo.expiryDate.match(/^\d{2}\/\d{2}$/)) {
        setErrorMessage('Invalid expiry date format. Use MM/YY.');
        return;
      }
  
      if (!creditInfo.cvv.match(/^\d{3,4}$/)) {
        setErrorMessage('Invalid CVV. It should be 3 or 4 digits.');
        return;
      }
      console.log("form: ", formData)
      console.log("credit :", creditInfo)

      await generateTransaction()
    };
  return (
     <Dialog open={isOpen} onClose={onClose} transition
        className=" fixed inset-0 flex w-screen  items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
              <DialogPanel className="space-y-4 border bg-white py-4 px-8">
              <div className="flex flex-col gap-2 px-2 pb-2">
          <h3 className="text-xs uppercase font-semibold text-lightText">
            + 10 USD shipping
          </h3>
          <h2 className="text-lg font-bold line-clamp-2"> Total to pay: {totalAmount}</h2>
        </div>
              

      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="postCode">Post Code:</label>
        <Input
          type="text"
          id="postCode"
          name="postCode"
          value={formData.postCode}
          onChange={handleInputChange}
          required
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <Input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          required
          onChange={handleInputChange}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <Input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          required
          onChange={handleInputChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          required
          onChange={handleInputChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
      </div>

      <div className="input-group">
        <label htmlFor="cardNumber">Card Number</label>
        <Input
          id="cardNumber"
          name="cardNumber"
          type="text"
          value={creditInfo.cardNumber}
          onChange={handleCardInput}
          placeholder="1234 5678 9012 3456"
          required
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
        {cardType && <p className="card-type">Card Type: {cardType}</p>}
        <p className={`validation-message ${isValidCard ? 'valid' : 'invalid'}`}>
          {isValidCard ? 'Card is valid' : 'Card is invalid'}
        </p>
      </div>
  
      <div className="input-group">
        <label htmlFor="expiryDate">Expiry Date</label>
        <Input
          id="expiryDate"
          type="text"
          name="expiryDate"
          value={creditInfo.expiryDate}
          onChange={handleInputChangecard}
          placeholder="MM/YY"
          required
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
      </div>
  
      <div className="input-group">
        <label htmlFor="cvv">CVV</label>
        <Input
          id="cvv"
          type="text"
          name="cvv"
          value={creditInfo.cvv}
          onChange={handleInputChangecard}
          placeholder="123"
          required
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
        />
      </div>
  
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="flex justify-center my-3">
          <button
          type="submit"
          className="rounded bg-sky-600 py-2 px-4 text-md md:text-xl lg:text-lg text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2"
        >
          Pay
        </button>
            <button onClick={onClose} type="button" className="rounded bg-gray-600 py-2 px-4 text-md md:text-xl lg:text-lg text-white data-[hover]:bg-gray-500 data-[active]:bg-gray-700 mx-2">
              Cancel
            </button>
          </div>
    </form>
              </DialogPanel>
    </Dialog>
  );
};

const detectCardType = (cardNumber:string) => {
    const patterns = {
      Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      Mastercard: /^5[1-5][0-9]{14}$/,
      Amex: /^3[47][0-9]{13}$/,
      Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    };
  
    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(cardNumber)) {
        return type;
      }
    }
    return 'Unknown';
  };
  
  const validateCardNumber = (cardNumber:string) => {
    const sanitized = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;
  
    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized.charAt(i), 10);
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  };
  
export default DeliveryForm;