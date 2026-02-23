import React from 'react'
import './styles.scss'

interface VideoPlayerProps {
    programTitle: string; 
    source: string;   
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ programTitle, source }) => {
  return (
    <article className='video-content'>
        <div className='video-info'>
            <p className='program-title'>{programTitle}</p>
        </div>
        <video controls autoPlay muted playsInline>
            <source src={source} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
        </video>
    </article>
  )
}

export default VideoPlayer;