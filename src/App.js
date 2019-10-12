import React, {Component} from 'react';
import NavBar from './components/navbar/navBar';
import './App.scss';
import TourList from './components/TourList';

class App extends Component {
render() {
  
      return (
      <div>
        <NavBar />
        <TourList />
      
      </div> 
      );
    
  
}
  
}

export default App;
