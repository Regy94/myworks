import React from 'react';
import { connect } from 'react-redux';

import NavBar from '.';

class NavBarContainer extends React.Component {

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

export default connect (manStateToProps)(NavBarContainer)