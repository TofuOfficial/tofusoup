import React, { useState, Component } from 'react'
import { useParams } from 'react-router-dom'
import { Hls } from 'hls.js';
import ReactHlsPlayer from 'react-hls-player/dist';
import data from  '../db/one-piece.json'

class Watch extends Component {
  constructor() {
    super()
    console.log(data)
  }

  render() {
    return (
      <div className='watch-wrapper'>
        <div className='video'>
          <ReactHlsPlayer
          src={ data.at(this.props.params.ep - 1).streams.at(1).stream_url }
          //  autoPlay
           controls
           width="960"
           height="540"
           ></ReactHlsPlayer>
        </div>
      </div>
    )
  }
}

export default (props) => (
  <Watch
      {...props}
      params={useParams()}
  />
);

// export default function Watch() {
//   const [video_element, setVideoElement] = useState();
//   let { name, ep } = useParams();
//   // let data = import(`../configs/${name}.json`);

//   let video_vid = document.getElementById('video');
//   if(Hls.isSupported()) {
//     var hls = new Hls({
//       debug: true,
//     });
//     hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
//     hls.attachMedia(video_vid);
//     hls.on(Hls.Events.MEDIA_ATTACHED, function () {
//       video_vid.muted = true;
//       video_vid.play();
//     });
//   }
//   else if (video.canPlayType('application/vnd.apple.mpegurl')) {
//     video_vid.src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
//     video_vid.addEventListener('canplay', function () {
//       video_vid.play();
//     });
//   }

//   return (
//     <div className='watch-wrapper'>
//       <div className='video'>
//         <video id='video' width="960" height="540" controls autoPlay loop>
//         </video>
//       </div>
//     </div>
//   )
// }