import React from 'react'
import "./css/Widget.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterFollowButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1385534616820277249"} />
        <TwitterTweetEmbed tweetId={"1376129545112260610"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/amrit.maurya.14/"}
          options={{ text: "#twitter_Clone using #reactjs & #firebase", via: "AmritRa22094899"}}
        />
        <TwitterFollowButton
          screenName={'AmritRa22094899'}
        />
      </div>
    </div>
  );
}

export default Widget
