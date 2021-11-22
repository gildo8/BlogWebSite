import { Link } from "react-router-dom"
import { Context } from '../../context/Context';
import {useContext} from 'react';
import "./topbar.css"



export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogOut=()=>{
        dispatch({type:"LOGOUT"});
    }

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
                <li className="topListItem" onClick={handleLogOut}>{user && "LOGOUT"}</li>
            </ul>
            </div>
            <div className="topRight">
            {
                user ? 
                <img className="topImg" src={user.profilePic} alt=""/>
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
