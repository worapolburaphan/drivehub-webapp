import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Footer } from './Footer'

function DefaultLayout() {
  return (
    <div className='tw-flex tw-min-h-screen tw-flex-col'>
      <Navbar />
      <main className='tw-flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
