import React, { useContext } from 'react';
import "./write.css";
import axios from "axios";
import {Context} from "../../context/Context"

export default function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user} = useContext(Context)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newPost = {
            userName: user.username,
            title,
            desc,
        };

        axios.post("/posts");
    }

    return (
        <div className="write">
        <img className="writeImg" src="https://i.ibb.co/1bvgKZ4/empire-state-building-3-wallpaper-1920x1080.jpg" alt=""/>
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}></input>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
