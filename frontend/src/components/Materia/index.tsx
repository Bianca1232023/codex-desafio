import React from 'react'
import './styles.scss'

interface VideoProps {
    duration: string;
    progamTitle: string;
    source: string;
}

interface MateriaProps {
    chapeu: string;
    image: string;
    section: string;
    summary: string;
    title: string;
    url: string;
    video: VideoProps | null;
    type: string;
    created: string;
    id: string;
}


const Materia: React.FC<MateriaProps> = ({ chapeu, image, section, summary, title, url, video }) => {
  return (
    <article className='materia'>
      <a href={url} className='materia-link'>
        {chapeu && <p className='chapeu'>{chapeu}</p>}
        {image && <img src={image} alt={title} className='image-materia'/>}
        <p className='section'>{section}</p>
        <h2 className='title-materia'>{title}</h2>
        <p className='summary-materia'>{summary}</p>
        {video && <span className='video-badge'>📹 Vídeo</span>}
      </a>
    </article>
  )
}

export default Materia;