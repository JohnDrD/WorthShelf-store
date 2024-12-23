import { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Input } from '@headlessui/react';
import { setUserData, useAppDispatch } from '../../store/store.config';

const LoginModal = ({isOpen,onClose}:{isOpen:boolean, onClose:any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
      const dispatch = useAppDispatch();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/costumer', { email, password });
      console.log('Login successful:', response.data);
      dispatch(setUserData({...response.data.data.user, token: response.data.data.token }))
      onClose(true);
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} transition
    className=" fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
      <div className="modal-overlay">
        <div className="modal-content">
          <DialogTitle className="bg-white mx-auto">
            <h1 className='text-lg text-center py-2'>Log In</h1>
            </DialogTitle>
          <DialogPanel className="space-y-4 border bg-white py-4 px-8">
          <div className="modal-body">
            <div className="input-group">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
            <div className="input-group">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
            {errorMessage && <p className="bg-white/90 text-red-600 text-center py-1 rounded-md tracking-wide font-semibold">{errorMessage}</p>}
          </div>
          <div className="flex justify-center">
          <button
          onClick={handleLogin}
          
          className="rounded bg-sky-600 py-2 px-4 text-md md:text-xl lg:text-lg text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2"
        >
          Log In
        </button>
            <button onClick={onClose} className="rounded bg-gray-600 py-2 px-4 text-md md:text-xl lg:text-lg text-white data-[hover]:bg-gray-500 data-[active]:bg-gray-700 mx-2">
              Cancel
            </button>
          </div>
          </DialogPanel>

        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;