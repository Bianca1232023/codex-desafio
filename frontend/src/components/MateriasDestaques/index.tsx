import React from 'react'
import './styles.scss'
import { type MateriaCompleta } from '../../hooks/useMaterias'

const MateriaDestaques: React.FC<MateriaCompleta> = ({ chapeu, image, section, summary, title, url}) => {
  return (
    <article className={`materia ${image && 'materia--com-imagem'}`}>
      <a href={url} className='materia-link'>
        {chapeu && <p className='chapeu'>{chapeu}</p>}
        {image && <img src={image} alt={title} className='image-materia'/>}
        <div className='content-container'>
          {image && <p className='section'>{section}</p>}
          <h2 className='title-materia'>{title}</h2>
          <p className='summary-materia'>{summary}</p>
        </div>
      </a>
    </article>
  )
}

export default MateriaDestaques;