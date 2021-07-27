import { useCallback } from 'react'

/**
 * Custom Hook, provides a gif loader
 * @remarks make the gif loader accessible when needed
 * @returns A loader which provide the URL where the gif is stored
 */
export function useLoader() {
  /**
   * Function who provides the URL where the gif is stored
   * @param url - The URL to fetch the gif image
   * @returns The gif image
   */
  const loadGif = useCallback((url: string) => url, [])

  return { loadGif }
}
