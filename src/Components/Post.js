import React, { forwardRef } from 'react'
import { Avatar, IconButton  } from "@material-ui/core"
import Tooltip from '@material-ui/core/Tooltip';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "./css/Post.css"
const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    time
}, ref) => {
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
                    <IconButton>
                        <ChatBubbleOutlineIcon fontSize="small" className="post_icons" />
                    </IconButton>
                    <IconButton>
                        <RepeatIcon fontSize="small" className="post_icons" />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon fontSize="small" className="post_icons" />
                    </IconButton>
                    <IconButton>
                        <PublishIcon fontSize="small" className="post_icons" />
                    </IconButton>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteForeverIcon fontSize="small" className="post_icons" />
                        </IconButton>
                    </Tooltip>

                </div>
            </div>
        </div>
    )
})

export default Post
