import "./topbar.css"

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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
            </div>
            <div className="topRight">
            <img className="topImg" src="https://i.ibb.co/d76DC43/14939581-10207612185571707-8593143454056888397-o.jpg" alt=""/>
            <i className="topSearchIcon fas fa-search"/>
            </div>
        </div>
    )
}
