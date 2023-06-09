import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import "../assets/header.css"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2 className="site-header">PhotoLand</h2></Link>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
                {cartItems.length > 0 && <span className="cart-item-quantity">{cartItems.length}</span>}
            </Link>
        </header>
    )
}

export default Header
