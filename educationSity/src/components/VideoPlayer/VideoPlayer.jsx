import React , {useRef} from 'react'
import './VideoPlayer.css'
import college_video from '../../assets/college-video.mp4'

const VideoPlayer = ({playVideo, setPlayVideo}) => {

const player=useRef(null);
const closePlayer=(e)=>{
    if(e.target===player.current){
        setPlayVideo(false)
    }
}
  return (
    <div className={`videoPlayer ${playVideo ? "":"hide"}`} ref={player}
    onClick={closePlayer}>
    <video src={college_video} autoPlay muted controls></video></div>
  )
}

export default VideoPlayer