import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';


class NavBarContainerApi extends React.Component {
    componentDidMount() {

    }

    render() {
        return(
            <NavBar {...this.props} />
        )
    }
}

const manStateToProps = (state) => {
    return{
        id: state.auth.id
    }
}

const NavBarContainer = connect (manStateToProps)(NavBarContainerApi)

export default NavBarContainer