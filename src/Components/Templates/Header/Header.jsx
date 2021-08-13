import React from "react"
import "./Header.css"
import Logo from "../Logo/Logo.jsx"

export default function Header(props){
    return(
        <header className="header">
            <Logo />
            <div class="input-group">
                <input type="text" class="" placeholder="Search for..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text" id="basic-addon2">
                    <i class="fa fa-search"></i>
                </span>
            </div>

            <div className="profile-group">
                <i className="fa fa-user head-icon"></i>
                <p>
                    <a href="/login" className="link">Login or sign up </a>
                    <br/>
                    to see your <a href="/orders" className="link">orders</a>
                </p>
            </div>
            
            <div>
                <a href="/cart" className="link">
                    <i class="fa fa-cart-plus head-icon"></i>
                </a>
                
            </div>

        </header>
    )
}
