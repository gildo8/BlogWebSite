import React from 'react';
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.ibb.co/d76DC43/14939581-10207612185571707-8593143454056888397-o.jpg" alt=""></img>
                <p>
                Duis incididunt nostrud enim duis excepteur ad exercitation nulla ex commodo excepteur commodo duis. 
                Eiusmod duis mollit cillum irure officia ipsum mollit incididunt anim id aute non laborum. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook"/>
                <i className="sidebarIcon fab fa-twitter"/>
                <i className="sidebarIcon fab fa-pinterest"/>
                <i className="sidebarIcon fab fa-instagram"/>
                </div>
            </div>
        </div>
    )
}
