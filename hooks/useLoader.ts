import { useCallback } from 'react'

export function useLoader() {
  const loadGif = useCallback((url: string) => url, [])

  return { loadGif }
}
