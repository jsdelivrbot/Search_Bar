import _ from 'lodash';
import React, { Component} from 'react'; //says go get library called react from react and its in node_modules
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //cause its file i created, need file path to it
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
// const API_KEY = 'AIzaSyCNXQvOiLvN0aeEua6AtErwUyOT0sqFV70';  //this allows make request to youtube
const API_KEY = <script async defer src="https://maps.googleapis.com/maps/api/js?key=YAIzaSyDXncPFHH10ENKsucXKfB6j-ZomMMbt9wg&callback=initMap"
type="text/javascript"></script>
//index is most parent component we have. all children of App so should fetch data.
//dependencies and install it into the variale.
// Create a new component. this componenet should produce something
//make it into some html.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null
      };//property name video can be whatever we want

      this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos)  => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });  //video is the data of the video.this is a callback with key of videos and data, es6 makes videoData in curly braces {video: data}
    });
  }

  //=> replaces having to write function
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);//this debounce function mods videoSearch and takes in videosearch function but can only be called every 300 millisec
    return (
      //this pulls in the search bar into it. //google does this with their instance search
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
      //above the videos={this.state.videos} this makes it jsx and puts videolist into this render
      //above passing prop videoData to videos. getting data from parent APP
    ); //app is parent of VideoList, need to pass data from parent to child.
  }
}
// App is just a class
//Take this component's generated HTML and put it on the page
//take the components generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); //now this knows what React is to run it.
//ReactDOM sends to DOM.
//the <App /> passes a instance of the App class.
