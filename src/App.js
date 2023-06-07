import React from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/booknow' element={<Form/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
