import React, { useState, useEffect } from 'react'
import "./css/Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "./firebase"
import FlipMove from "react-flip-move"

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({...doc.data(), id : doc.id})))
            console.log(snapshot.docs.map(doc => doc.data()));
        })
    }, [])
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove>
            
            {
                posts.map(post =>{
                    return ( 
                        <Post 
                          key={post.text}
                          displayName = {post.displayName}
                          username = {post.username}
                          verified = { post.verified}
                          text = {post.text}
                          image = {post.image}
                          avatar = {post.avatar}
                          time = {post.time}
                          post = {post} />
                    )
                })
            }
            </FlipMove>

        </div>
    )
}

export default Feed