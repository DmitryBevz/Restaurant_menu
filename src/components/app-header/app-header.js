import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppHeader = ({totalPrice}) => {
    return (
        <header className="header">
            <span className="logo">Smakota</span>
            <Link to ={'/'} className = "header__link header_m">Menu</Link>
            <Link to = "/cart" className = "header__link header_c">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return{
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);