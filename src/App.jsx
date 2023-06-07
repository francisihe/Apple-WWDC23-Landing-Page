import './App.css'
import { Routes, Route } from 'react-router-dom'
//import Button from './components/button/Button'
import NavigationBar from './components/navigation/NavigationBar'
import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App


/* <Button
        type='button'
        buttonType='transparent'
      > Transparent Button </Button>

      <Button
        type='button'
        buttonType='white'
      > White Button </Button>

      <Button
        type='button'
        buttonType='black'
      > Black Button </Button> */