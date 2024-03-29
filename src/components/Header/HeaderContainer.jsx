import React from 'react';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import Header from './Header';
import {  logout } from '../../redux/auth-reducer';



class HeaderContainer extends React.Component {


    render() {
        return <> 
            { this.props.isFetching ? <Preloader /> : null }
            <Header {...this.props} />
        
        </>
        
        
            
            
        
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    //isFetching: state.usersPage.isFetching
});

export default connect (mapStateToProps, { logout })(HeaderContainer);