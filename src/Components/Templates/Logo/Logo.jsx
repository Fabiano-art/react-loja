import React from "react"
import "./Logo.css"
import logo from "../../../assets/Images/Logo.jpg"

export default function Logo(props){
    return (
        <aside className="logo">
           <a href="/">
               <img src={logo} alt="Logo" />
           </a>
        </aside>
    )
}