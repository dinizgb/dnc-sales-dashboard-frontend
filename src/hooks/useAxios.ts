/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const usePost = (endpoint: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<number | null>(null)

  const postData = async (
    postData: Record<string, any>,
    config?: AxiosRequestConfig
  ) => {
    setData(null)
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/${endpoint}`,
        postData,
        config
      )
      setData(response.data)
    } catch (e: any) {
      setError(e.response?.status ?? 500)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, postData }
}
