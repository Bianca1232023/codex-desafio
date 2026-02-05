import React from 'react'
import './styles.scss'

const AnuncioPublicitarios: React.FC = () => {
  const [imageUrl] = React.useState<string>(() => `https://picsum.photos/800/400?random=${Math.floor(Math.random() * 1000)}`)

  return (
    <article className='anuncio-publicitario'>
      <span className='label-anuncio'>PUBLICIDADE</span>
      <img src={imageUrl} alt="Anúncio publicitário" />
    </article>
  )
}

export default AnuncioPublicitarios