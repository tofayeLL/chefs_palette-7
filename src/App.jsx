
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
 
  return (
    <>
     
     <div className='container mx-auto lg:px-16 px-2'>
     <Nav></Nav>
     </div>

     <div className='container mx-auto lg:px-16 px-2'>
      <Banner></Banner>
     </div>
      
      
     
      
    </>
  )
}

export default App
