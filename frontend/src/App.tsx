import React from 'react'
import './App.scss'
import './styles/global.scss'
import { Logo } from './components/icons'
import MateriaDestaques from './components/MateriasDestaques'
import FeedPosts from './components/FeedPosts'
import GrupoDeMateria from './components/GrupoDeMateria'
import AnuncioPublicitarios from './components/AnuncioPublicitarios'
import { useMaterias } from './hooks/useMaterias'
import type { MateriaCompleta } from './hooks/useMaterias'

function App() {
  const { materias, loading, error, hasMore, showVideo, setShowVideo, loadMore } = useMaterias()

  if (loading && materias.length === 0) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar matérias: {error.message}</p>

  const destaques = materias.slice(0, 2)
  const feedItems = materias.slice(2).filter((item): item is MateriaCompleta => item.type === 'materia')
  const agrupadores = materias.filter(item => item.type === 'agrupador-materia')
  
  const renderFeedItem = (item: MateriaCompleta, index: number) => {
    const shouldShowAd = index > 0 && index % 8 === 0
    
    return (
      <React.Fragment key={item.id}>
        {shouldShowAd && <AnuncioPublicitarios />}
        
        <FeedPosts
          id={item.id}
          image={item.image}
          section={item.section}
          summary={item.summary}
          title={item.title}
          url={item.url}
          video={item.video}
          type={item.type}
          created={item.created}
          showVideo={showVideo}
          setShowVideo={setShowVideo}
        />
      </React.Fragment>
    )
  }

  return (
    <>
      <header>
        <Logo />
      </header>

      <section className='destaques'>
        {(destaques as MateriaCompleta[]).map((destaque) => (
          <MateriaDestaques
            key={destaque.id}
              {...destaque}
            />
        ))}
{/* 
        <div className="primeiro-destaque">
          {destaques[0] && destaques[0].type === 'materia' && (
            <MateriaDestaques
              id={(destaques[0] as MateriaCompleta).id}
              chapeu={(destaques[0] as MateriaCompleta).chapeu}
              section={(destaques[0] as MateriaCompleta).section}
              summary={(destaques[0] as MateriaCompleta).summary}
              title={(destaques[0] as MateriaCompleta).title}
              url={(destaques[0] as MateriaCompleta).url}
            />
          )}
        </div>
        <div className='segundo-destaque'>
          {destaques[1] && destaques[1].type === 'materia' && (
            <MateriaDestaques
              id={(destaques[1] as MateriaCompleta).id}
              type={(destaques[1] as MateriaCompleta).type}
              created={(destaques[1] as MateriaCompleta).created}
              chapeu={(destaques[1] as MateriaCompleta).chapeu}
              image={(destaques[1] as MateriaCompleta).image}
              section={(destaques[1] as MateriaCompleta).section}
              summary={(destaques[1] as MateriaCompleta).summary}
              title={(destaques[1] as MateriaCompleta).title}
              url={(destaques[1] as MateriaCompleta).url}
            />
          )}
        </div> */}
      </section>
      
      <div className='main-container'>
        <section className='feed-section'>
          {feedItems.map((item, index) => renderFeedItem(item, index))}
          
          {hasMore && (
            <button className='btn-veja-mais' onClick={loadMore}>
              VEJA MAIS
            </button>
          )}
        </section>
        
        <aside className='sidebar'>
          {agrupadores.map((agrupador) => (
            <GrupoDeMateria
              key={agrupador.id}
              id={agrupador.id}
              header={agrupador.header}
              footer={agrupador.footer}
              group={agrupador.group}
              type={agrupador.type}
              created={agrupador.created}
            />
          ))}
        </aside>
      </div>
    </>
  )
}

export default App
