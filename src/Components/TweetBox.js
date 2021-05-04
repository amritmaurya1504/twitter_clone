import { Button, Avatar, colors } from '@material-ui/core'
import React, { useState } from 'react'
import "./css/tweetbox.css"
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PollIcon from '@material-ui/icons/Poll';
import firebase from "firebase"
import db from "./firebase";
const TweetBox = () => {

    const [tweetMsg, setTweetMsg] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
            db.collection('posts').add({
                displayName: "Amrit Raj Maurya",
                username: "rajamritmaurya.1",
                verified: true,
                text: tweetMsg,
                image: tweetImage,
                avatar: "https://avatars.githubusercontent.com/amritmaurya1504",
                time: new Date().toLocaleString(),
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
            setTweetMsg("");
            setTweetImage("");
        
    }

    // const deleteDocumnet = () =>{
    //       db.collection('posts').doc(id).delete()
    // }

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox_input">
                    <Avatar src="https://avatars.githubusercontent.com/amritmaurya1504" />
                    <input type="text" placeholder="What's happening?" value={tweetMsg} onChange={e => setTweetMsg(e.target.value)} />
                </div>
                <input
                    style={{
                        fontSize: "20px",
                        color: "lightgray",
                        marginLeft: "10px",
                    }}
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    type="text" placeholder="Optional : Enter Image url" className="tweetbox_inputUrl" />
                <div className="textbox_icon">
                    <ImageSearchIcon className="icons" />
                    <InsertEmoticonIcon className="icons" />
                    <ScheduleIcon className="icons" />
                    <PollIcon className="icons" />
                    <Button disabled={!tweetMsg} className="tweetbox_button" onClick={sendTweet}>Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox
