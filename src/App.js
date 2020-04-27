import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Settings from './modules/Settings';
import News from './modules/News';
import MessagesContainer from './modules/Messages/MessagesContainer';
import PeoplesContainer from './modules/Peoples/PeoplesContainer';
import ProfileContainer from './modules/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import Login from './components/Login';
import Loader from './components/common/Loader';
import NotFound from './components/common/NotFound'

import { ititializeTC } from './data/app-reducer';

import './App.css';
// import { compose } from 'redux';
// import {hot} from 'react-hot-loader/root';

class App extends React.Component {

  componentDidMount () {
    this.props.ititialize()
  }

  render () {

    if (!this.props.isInitializing) {
      return <Loader />
    }

    return (
      <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <HeaderContainer/>
          <NavBarContainer/>
          <div className="content">
          <Switch>
            <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
            <Route path='/news' component={News}/>
            <Route path='/messages' render={ () => <MessagesContainer/> } />
            <Route path='/peoples' render={ () => <PeoplesContainer/> } />
            <Route path='/settings' component={Settings}/>
            <Route path='/login' render={ () => <Login/> } />
            <Route component={NotFound} />
          </Switch>
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

export default connect(mapStateToProps,{ititialize: ititializeTC})(App)