import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';

const App=(props)=> {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="wrapper">
        <Header/>
        <NavBar/>
        <div className="content">
          <Route path='/profile' render={ () => <Profile state= {props.state.ProfilePage} dispatch={props.dispatch} /> }/>
          <Route path='/news' component={News}/>
          <Route path='/messages' render={ () => <Messages state={props.state.dialogsPage} dispatch={props.dispatch} /> } />
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
