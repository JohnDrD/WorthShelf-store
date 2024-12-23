import { createSlice, type PayloadAction, combineReducers} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer} from 'redux-persist';
import { default as reduxStorage } from 'redux-persist/lib/storage';
import { User } from '../interfaces/user.interface';


const persistConfig = {
    key: 'root',
    storage: reduxStorage
  };

const productSlice = createSlice({
    name: 'productData',
    initialState: {
        productData:""
    },
    reducers: {
      setProductId: (state, action: PayloadAction<string>) => {
        state.productData = action.payload;
      },
    },
  });

  const amountSlice = createSlice({
    name: 'productData',
    initialState: {
        amountData:0
    },
    reducers: {
      setAmountNumber: (state, action: PayloadAction<number>) => {
        state.amountData = action.payload;
      },
    },
  });

  const UserSlice = createSlice({
    name: 'UserData',
    initialState: {
        UserData:{
          uuid: '',
          name: '',
          email: '',
          phone: '',
          token:""
        }
    },
    reducers: {
      setUserData: (state, action: PayloadAction<User>) => {
        state.UserData = action.payload;
      },
    },
  });

  const  rootReducers= combineReducers({
    product: productSlice.reducer,
    user:UserSlice.reducer,
    amount:amountSlice.reducer
  })

const persistedRedu= persistReducer(persistConfig, rootReducers)

 export  const store = configureStore({
    reducer: persistedRedu,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
  });

export const { setProductId } = productSlice.actions;
export const {setUserData}= UserSlice.actions
export const {setAmountNumber}= amountSlice.actions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T => useSelector(selector);