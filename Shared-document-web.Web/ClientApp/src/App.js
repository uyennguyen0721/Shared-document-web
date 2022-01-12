import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import AllDocumentsPage from './pages/AllDocumentsPage'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
    <Router>
      <div className='app'>
        <Header />
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/documents" component={AllDocumentsPage}/>
          <Route exact path="/search" component={SearchResultPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App