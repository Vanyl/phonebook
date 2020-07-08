import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Interface/Navbar'
import Homepage from './Component/Pages/Homepage'
import AddNewEntry from './Component/Contact/AddNewEntry'
import Error from './Component/Pages/Error'
import About from './Component/Pages/About'
import EditEntryPage from './Component/Contact/EditEntryPage'
import { Provider } from './Context/contactContext'
// import store from './redux/store'



function App() {

  return (
    // <Provider>    
      <Router>
        <div className="App">
          <Navbar/>      
          <div className="container">
            <Switch>
              <Route exact path = '/' component = {Homepage}/>
              <Route exact path = '/add' component = {AddNewEntry}/>
              <Route exact path ='/about' component={About}/>
              <Route exact path ='/edit' component={EditEntryPage}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </div>
      </Router>
    //  </Provider
  );
}

export default App;