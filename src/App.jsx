import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from './logo.svg';
import { IconName } from "react-icons/im";
import './App.css';
import './App.css';
import { Header, Mainheader} from './Components/Header'
import Jumbotron from './Components/Footer'
// import firebase from './config/firebase.js'
import Seller from './Components/Seller.js'

import Lastfooter from './Components/Lastfooter'



class App extends React.Component{
  
  render(){
    

    return(

      <div>
        <Mainheader/>
        <Header/>
        <Jumbotron/>
        <Seller/>

        <Lastfooter/>

      </div>
      
    )
  }
}


export default App;
