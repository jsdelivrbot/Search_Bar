import React from 'react'; // video gets and delcares video into a var called video
//because put video in {} it's like doing const video= props.video; this gets video off props
//able to pull in multiple properties into VideoListItem
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} /> 
        </div>//imageUrl is js variable and since going into jsx, put in curly braces
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
