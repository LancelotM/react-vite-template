import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css"
import App from './App.tsx'
import { store } from '@/store/index.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
