import React from 'react';
import './App.css';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import PeoplesContainer from './components/Peoples/PeoplesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { ititializeTC } from './data/app-reducer';
import Loader from './components/common/loader/loader';

class App extends React.Component {

  componentDidMount () {
    this.props.ititialize()
  }

  render () {

    if (!this.props.isInitializing) {
      return <Loader/>
    }

    return (
      <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <HeaderContainer/>
          <NavBarContainer/>
          <div className="content">
            <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
            <Route path='/news' component={News}/>
            <Route path='/messages' render={ () => <MessagesContainer/> } />
            <Route path='/peoples' render={ () => <PeoplesContainer/> } />
            <Route path='/settings' component={Settings}/>
            <Route path='/login' render={ () => <Login/> } />
          </div>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isInitializing: state.app.isInitializing
  }
}

export default connect(mapStateToProps,{ititialize: ititializeTC})(App);
