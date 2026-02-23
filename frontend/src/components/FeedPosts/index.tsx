import React from 'react'
import './styles.scss'
import { PlayerIcon } from '../icons'
import type { MateriaCompleta } from '../../hooks/useMaterias'
import Modal from '../Modal'
interface MateriaGeraisProps extends Omit<MateriaCompleta, 'chapeu'|'group'> {
    showVideo?: boolean;
    setShowVideo?: (show: boolean) => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffHours < 24) {
    return `Há ${diffHours} hora${diffHours !== 1 ? 's' : ''}`
  }
  
  if (diffHours < 48) {
    return `Há ${diffHours} horas`
  }
  
  if (diffDays < 7) {
    return `Há ${diffDays} dia${diffDays !== 1 ? 's' : ''}`
  }
  
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const FeedPosts: React.FC<MateriaGeraisProps> = ({ image, section, title, url, created, video, showVideo, setShowVideo }) => {
  return (
    <>
    {showVideo && video && setShowVideo && (
      <Modal 
        source={video.source} 
        title={video.programTitle} 
        onClose={() => setShowVideo(false)}
      />
    )}
    <article className='feed-posts-body'>
        <div className='feed-media-wrapper'>
          <a className='feed-image-link' onClick={() => {
            if (video && setShowVideo) {
              setShowVideo(true)
            }
          }}>
            {image && <img src={image} alt={title} className='feed-image'/>}
            {video && (
              <div className='video-overlay'>
                <PlayerIcon />
              </div>
            )}
          </a>
        </div>
        <div className='feed-content'>
          <h2 className='feed-posts-title'>
            <a className='feed-post-link' href={url}>{title}</a>
          </h2>
          <div className='feed-post-metadata'>
            <span className='feed-post-datetime'>
              {formatDate(created)}
            </span>
            <span className='feed-post-metadata-section'>
              {section}
            </span>
          </div>
        </div>
    </article>
    </>
  )
}

export default FeedPosts;