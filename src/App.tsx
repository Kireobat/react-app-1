import './App.css'

import Topbar from './components/Topbar.tsx'
import Searchbar from './components/Searchbar.tsx'
import Shortcuts from './components/Shortcuts.tsx'
import Popup from './components/Popup.tsx'
import Favorites from './components/Favorites.tsx'
import LeftToPay from './components/LeftToPay.tsx'
import SpendingLimit from './components/SpendingLimit.tsx'
import OrdersAndTracking from './components/OrdersAndTracking.tsx'

function App() {

  return (
    <div className='bg-[#f1f1f1]'>
      <div className='bg-gradient-to-br from-[#efb7c9] to-[#c7d1f6] aspect-square'>
        <Topbar />
        <Searchbar />
        <Shortcuts />
        <Popup />
      </div>
      <div className='bg-[#f1f1f1] p-2 rounded-t-[30px] -translate-y-8 h-10'></div>
      <div className='-translate-y-12'>
        <div className='flex'>
          <SpendingLimit/>
          <LeftToPay/>
        </div>
        <OrdersAndTracking/>
        <Favorites/>
      </div>
    </div>
  )
}

export default App
