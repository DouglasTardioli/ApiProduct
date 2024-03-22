
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar'




function App() {

  return (
    <div className='text-slate-100 p-2 flex flex-col items-center justify-center'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
