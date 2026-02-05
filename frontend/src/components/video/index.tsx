import React from 'react'
import './styles.scss'

interface VideoProps {
    duration: string;
    programTitle: string; 
    source: string;   
}

const Video: React.FC<VideoProps> = ({ duration, programTitle, source }) => {
  return (
    <article className='video-content'>
        <video controls>
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='video-info'>
            <p className='program-title'>{programTitle}</p>
            <p className='duration'>{duration}</p>
        </div>
    </article>
  )
}

export default Video;