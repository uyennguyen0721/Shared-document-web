import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import AllDocumentsPage from './pages/AllDocumentsPage'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import LoginPage from './pages/LoginPage'
import AdminNavbar from './admin/components/Navbars/AdminNavbar'
import AdminTaskBar from './admin/components/AdminTaskBar/AdminTaskBarComponent'
import UserProfile from './admin/page/UserProfile'
function App() {
  

  return (
    <Router>
      <div className='app'>
              <Header />
              <AdminNavbar />
              <AdminTaskBar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/documents" component={AllDocumentsPage}/>
          <Route exact path="/search" component={SearchResultPage} />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/admin/profile" component={UserProfile} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App