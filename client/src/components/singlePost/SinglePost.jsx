import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Link} from "react-router-dom";
import "./singlePost.css"

export default function SinglePost() {

    const location = useLocation();
    const postPath = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + postPath);
            setPost(res.data);
        };
        getPost();
    }, [postPath])


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            {post.photo && (
                <img className="singlePostImg" 
                src={post.photo} alt=""/>
            )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b><Link to={`/?user=${post.username}`} className="link"> {post.username} </Link></b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                  </p>
            </div>
        </div>
    )
}
