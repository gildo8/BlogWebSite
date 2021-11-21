import React from 'react';
import { Link } from "react-router-dom"
import "./topbar.css"

const user = true;
export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"/>
            <i className="topIcon fab fa-twitter"/>
            <i className="topIcon fab fa-pinterest"/>
            <i className="topIcon fab fa-instagram"/>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/contact">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE POST</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">{user && "LOGOUT"}</Link>
                </li>
            </ul>
            </div>
            <div className="topRight">
            {
                user ? 
                <img className="topImg" src="https://i.ibb.co/d76DC43/14939581-10207612185571707-8593143454056888397-o.jpg" alt=""/>
                : (
                    <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">{"LOGIN"}</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">{"REGISTER"}</Link>
                    </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fas fa-search"/>
            </div>
        </div>
    )
}
