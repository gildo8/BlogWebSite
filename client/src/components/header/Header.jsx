import React from 'react';

import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://i.ibb.co/Gp4zQNt/wallpaper1920x1080.jpg" alt=""/>
        </div>
    )
}
