import React from 'react'
import './VideoPlayer.css'
import college_video from '../../assets/college-video.mp4'

const VideoPlayer = ({playVideo, setPlayVideo}) => {
  return (
    <div className={`videoPlayer ${playVideo ? "":"hide"}`}>
    <video src={college_video} autoPlay muted controls></video></div>
  )
}

export default VideoPlayer