import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import AllDocumentsPage from './pages/AllDocumentsPage'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DocumentDetailPage from './pages/DocumentDetailPage'
import UploadDocumentPage from './pages/UploadDocumentPage'
import AdminNavbar from './admin/components/AdminNavbar'
import AdminTaskBar from './admin/components/AdminTaskBarComponent'
import UserProfile from './admin/page/UserProfile'
import DashBoard from './admin/page/DashBoard'
import ListDocument from './admin/page/ListDocument'
import ReportDocument from './admin/page/ReportDocument'
import ReportUser from './admin/page/ReportUser'

import 'antd/dist/antd.css';

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
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/documents/detail/:id" component={DocumentDetailPage} />
          <Route exact path="/upload" component={UploadDocumentPage} />
          <Route exact path="/admin/profile" component={UserProfile} />
          <Route exact path="/admin/dashboard" component={DashBoard} />
          <Route exact path="/admin/waiting-document" component={ListDocument} />
          <Route exact path="/admin/report-document" component={ReportDocument} />
          <Route exact path="/admin/report-user" component={ReportUser} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App