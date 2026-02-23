import React from 'react'
import './styles.scss'

interface MateriaDestaqueSemImagemProps {
    chapeu: string;
    section: string;
    summary: string;
    title: string;
    url: string;
    id: string;
}

const MateriaDestaqueSemImagem: React.FC<MateriaDestaqueSemImagemProps> = ({ 
    chapeu, 
    summary, 
    title, 
    url 
}) => {
  return (
    <article className='materia-sem-imagem'>
      <a href={url} className='materia-sem-imagem-link'>
        {chapeu && <p className='chapeu-sem-imagem'>{chapeu}</p>}
        <h1 className='titulo-sem-imagem'>{title}</h1>
        {summary && <p className='sumario-sem-imagem'>{summary}</p>}
      </a>
    </article>
  )
}

export default MateriaDestaqueSemImagem;
