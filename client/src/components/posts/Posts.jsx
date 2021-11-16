import React from 'react';
import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
    return (
        <div className="posts">
        {posts.map((p)=>
            <Post key={ Math.random().toString(36).substr(2, 9) } post={p}/>
        )}
        </div>
    )
}