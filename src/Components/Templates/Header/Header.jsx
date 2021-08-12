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
            <button  className="box btn">
                <div>
                    <i class="bi bi-box-seam"></i>
                    <p>My Orders</p>
                </div>
            </button>

            <div className="btn-group">
                <button type="button" class="btn btn-login">Log in</button>
                <button type="button" class="btn btn-login">Log out</button>
            </div>
            
        </header>
    )
}
