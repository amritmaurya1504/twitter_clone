import React, { forwardRef, useState } from 'react'
import firebase from "firebase"
import { Avatar, IconButton , Button } from "@material-ui/core"
import Tooltip from '@material-ui/core/Tooltip';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "./css/Post.css"
import Modal from "react-modal";
Modal.setAppElement("#root");
const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    time,
    post
}, ref) => {
    const[modal , setModal] = useState(false)
    const[tweet , setTweet] = useState(post.text)

    const deleteDocumnet = () => {
        const db = firebase.firestore()
        db.collection('posts').doc(post.id).delete()
    }
    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('posts').doc(post.id).set({...post, text : tweet})
    }

    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName} <span className="header_Special">{verified && <VerifiedUserIcon className="post_Badge" />} @{username}</span> </h3>
                    </div>
                    <div className="time">{time}</div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post_footer">
                    <Tooltip title="Reply">
                        <IconButton>
                            <ChatBubbleOutlineIcon fontSize="small" className="post_icons" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Retweet">
                        <IconButton>
                            <RepeatIcon fontSize="small" className="post_icons" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Like">
                        <IconButton>
                            <FavoriteBorderIcon fontSize="small" className="post_icons" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <IconButton>
                            <EditIcon onClick={() => {
                                setModal(true)
                            }} fontSize="small" className="post_icons"
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteForeverIcon onClick={deleteDocumnet} fontSize="small" className="post_icons delete" />
                        </IconButton>
                    </Tooltip>
                    <Modal
                        isOpen={modal}
                        shouldCloseOnOverlayClick={true}
                        //  shouldCloseOnEsc={true}
                        style={
                            {
                                overlay: {
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                },
                                content: {
                                    top: '50%',
                                    left: '50%',
                                    right: 'auto',
                                    bottom: 'auto',
                                    height: '60vh',
                                    width: '60vw',
                                    marginRight: '-50%',
                                    transform: 'translate(-50%, -50%)'
                                }
                            }
                        }
                    >
                        <textarea  id="" cols="100" rows="10" value={tweet} onChange={(e) =>{
                            setTweet(e.target.value);
                        }} ></textarea>
                        <br />
                        <Button className="tweetbox_button" style={{
                            backgroundColor:"var(--twitter-color)",
                            color : "var(--twitter-background)",
                            outline:"none"
                        }}  onClick={() => {
                            setModal(false)
                        }} >Close</Button>
                        <Button className="tweetbox_button" style={{
                            backgroundColor:"var(--twitter-color)",
                            color : "var(--twitter-background)",
                            marginLeft : "10px",
                            outline:"none"
                        }} onClick={onUpdate} >Save Changes</Button>
                    </Modal>
                </div>
            </div>

        </div>

    )
})

export default Post
