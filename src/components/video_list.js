import React from 'react';
import VideoListItem from './video_list_item';
    //this is componenet that doesn't have need for state.  so make plain functional component
    //this has a property called videoList

  const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
     onVideoSelect={props.onVideoSelect}
     key={video.etag}
     video={video} />
  });
    //able to grab the onVideoSelect from App to this video_list component through props. !!
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
      {videoItems}
    </ul>
  );
};

export default VideoList; //this exports videolist component
