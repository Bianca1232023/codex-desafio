import React, { useState, useEffect } from 'react'

export interface Video {
  duration: number
  programTitle: string
  source: string
}

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

interface MateriaBase {
  id: string
  type: string
  created: string
}

interface MateriaCompleta extends MateriaBase {
  type: 'materia'
  chapeu: string
  image: string | null
  section: string
  summary: string
  title: string
  url: string
  video: Video | null
  group: []
}

interface AgrupadorMateria extends MateriaBase {
  type: 'agrupador-materia'
  header: string
  footer: Footer
  group: GrupoItem[]
}

export type Materia = MateriaCompleta | AgrupadorMateria

export type { MateriaCompleta, AgrupadorMateria }

export const useMaterias = () => {
  const [materias, setMaterias] = useState<Materia[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const loadedRef = React.useRef(false)

  useEffect(() => {
    if (!loadedRef.current) {
      loadedRef.current = true
      loadPage(1)
    }
  }, [])

  const loadPage = async (page: number) => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:3002/feed/page/${page}`)
      
      if (!response.ok) {
        throw new Error('Erro ao carregar matérias')
      }
      
      const data = await response.json()
      
      if (data.message || data.length === 0) {
        setHasMore(false)
        setLoading(false)
        return
      }
      
      setMaterias(prev => [...prev, ...data])
      setLoading(false)
    } catch (err) {
      setError(err as Error)
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (hasMore && !loading) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      loadPage(nextPage)
    }
  }

  return { materias, loading, error, hasMore, loadMore, showVideo, setShowVideo, fetchPage: loadPage, currentPage }
}