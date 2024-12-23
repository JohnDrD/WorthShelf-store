import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store.config.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
      <App />
      </Provider>

    </PersistGate>

  </StrictMode>,
)
