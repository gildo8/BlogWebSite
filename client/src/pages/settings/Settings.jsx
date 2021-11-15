import React from 'react';
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://i.ibb.co/d76DC43/14939581-10207612185571707-8593143454056888397-o.jpg" alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}></input>
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="UserName"/>
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
