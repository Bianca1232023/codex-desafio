import './App.css'
import './styles/global.scss'
import { Logo } from './components/icons'
import Materia from './components/Materia'
import { useMaterias } from './hooks/useMaterias'
function App() {

  const { materias, loading, error } = useMaterias(1)
  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar matérias: {error.message}</p>

  return (
    <>
      <header>
        <Logo />
      </header>

      <section className='destaques'>
        <div className="primeiro-destaque">
          <Materia 
            id='eebe07c9-2a8b-4aaf-a72f-4a07cafa1c62'
            type='materia'
            created='2020-04-13T14:29:12.836Z'
            chapeu='Blog do Mauro Ferreira'
            image='https://s2.glbimg.com/smDuVTJeDF0t0fk179so-jfiFj4=/0x0:5760x3240/810x456/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/K/y/HUHLXmTBA5fz8AxQ3MOA/ap21231331650489.jpg'
            section='Blog do Mauro Ferreira'
            summary='Promovidos somente em nome da arte, os encontros virtuais da cantora sobressaem na quarentena pela combinação de  rigor estilístico e informalidade.'
            title='Mônica Salmaso revê amigos e o melhor da música brasileira na série "Ô de casas"'
            url='https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2020/04/12/monica-salmaso-reve-amigos-e-o-melhor-da-musica-brasileira-na-serie-o-de-casas.ghtml'
            video={{
              duration: "596000",
              progamTitle: "Jornal Hoje",
              source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }}
          />
        </div>
        <div className='segundo-destaque'>
          <Materia 
            id='1e307a4b-3186-4dfc-a268-ffaee374411a'
            type='materia'
            created='2020-04-13T14:32:20.174Z'
            chapeu='Blog do Mauro Ferreira'
            image='https://s2.glbimg.com/0T7e-b-Q6pw7h8wzYD91bpwGFu8=/0x0:768x432/1080x608/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/Y/FdAoUZSw6zvTg0gtuKJg/afegao-3.jpeg'
            section='Blog do Mauro Ferreira'
            summary='Com repertório quase todo inédito e lançamento previsto para maio, é o primeiro álbum solo desde Intimidade entre estranhos (2008)'
            title='Frejat lança canção "Amar um pouco mais", segundo single do álbum "Ao redor do precipício"'
            url='https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2020/04/12/frejat-lanca-cancao-amar-um-pouco-mais-segundo-single-do-album-ao-redor-do-precipicio.ghtml'
            video={null}
          />
        </div>
      </section>
      <section className='materias'>

      </section>
    </>
  )
}

export default App
