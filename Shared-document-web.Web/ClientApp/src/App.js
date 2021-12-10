import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/HeaderComponent/Header'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <Router>
      <div className='app'>
        <Header />
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App