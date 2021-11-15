import React from 'react';
import "./write.css"

export default function Write() {
    return (
        <div className="write">
        <img className="writeImg" src="https://i.ibb.co/1bvgKZ4/empire-state-building-3-wallpaper-1920x1080.jpg" alt=""/>
            <form className="writeForm">
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
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
