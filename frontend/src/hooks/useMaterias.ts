import { useState, useEffect } from 'react'

interface VideoProps {
  duration: string;
  progamTitle: string;
  source: string;
}

interface Materia {
  id: string
  chapeu: string
  image: string
  section: string
  summary: string
  title: string
  url: string
  video: VideoProps | null
  type: string
  created: string
}

export const useMaterias = () => {
  const [materias, setMaterias] = useState<Materia[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const maxPages = 8

  useEffect(() => {
    const fetchPage = async (page: number) => {
      const res = await fetch(`http://localhost:3000/feed/page/${page}`)
      const data = await res.json()
      return data
    }

    const loadAllPages = async () => {
      try {
        setLoading(true)
        const allMaterias = []
        
        for (let page = 1; page <= maxPages; page++) {
          const pageData = await fetchPage(page)
          allMaterias.push(...pageData)
        }
        
        setMaterias(allMaterias)
        setLoading(false)
      } catch (err) {
        setError(err as Error)
        setLoading(false)
      }
    }

    loadAllPages()
  }, [])

  const loadMore = () => {
    if (currentPage < maxPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  return { 
    materias, 
    loading, 
    error, 
    currentPage, 
    hasMore: currentPage < maxPages,
    loadMore 
  }
}