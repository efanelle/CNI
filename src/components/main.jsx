import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props){
    super(props);
  // //   this.state = {
  // //     videos: [],
  // //     currVid: window.exampleVideoData[0]
  // //   };

  }

  // onVideoClick (video) {
  //   this.setState({
  //     currVid: video
  //   });
  // }
  // componentDidMount() {
  //   this.getYouTubeVideos('Uncle Buck');
  // }

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.YOUTUBE_API_KEY,
  //     query: query,
  //     max: 5
  //   };

  //   this.props.searchYouTube(options, (videos)=>
  //     this.setState({
  //       videos: videos,
  //       currVid: videos[0]
  //     })
  //   );
  // }


  render(){
    return(
      <h1>You did it!!! Look at you!</h1>
    );
  }
}

module.exports = App;