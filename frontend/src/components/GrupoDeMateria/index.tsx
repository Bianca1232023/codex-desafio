import React from 'react'
import './styles.scss'

interface MateriaContent {
    title: string;
    url: string;
}

interface GrupoItem {
    content: MateriaContent;
    type: string;
    id: string;
}

interface Footer {
    label: string;
    url: string;
}

interface GrupoDeMateriaProps {
    header: string;
    footer: Footer;
    group: GrupoItem[];
    type: string;
    created: string;
    id: string;
}

const GrupoDeMateria: React.FC<GrupoDeMateriaProps> = ({ header, footer, group }) => {
  return (
    <article className='grupo-de-materia'>
        <h3 className='grupo-header'>{header}</h3>
        <ul className='grupo-list'>
            {group.map((item) => (
                <li key={item.id}>
                    <a href={item.content.url}>{item.content.title}</a>
                </li>
            ))}
        </ul>
        {footer && (
            <a href={footer.url} className='grupo-footer'>
                {footer.label}
            </a>
        )}
    </article>
  )
}

export default GrupoDeMateria;