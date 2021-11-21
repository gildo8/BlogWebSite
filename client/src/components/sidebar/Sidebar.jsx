import { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])

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

                    {cats.map((c) =>(
                        <li className="sidebarListItem">
                        <Link to={`/?cat=${c.name}`} className="link">
                        {c.name}
                        </Link>
                        </li>
                    ))}
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
