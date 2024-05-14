import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Manager from './components/manager/Manager'

function App() {

  return (
   <>
   <Navbar/>
  <div className='min-h-[85vh]'>
  <Manager/>
  </div>
   <Footer/>
   </>
  )
}

export default App
