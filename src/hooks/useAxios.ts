/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const useGet = <T>(
  endpoint: string,
  params: Record<string, any> = {}
) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      setError(null)

      try {
        const config: AxiosRequestConfig = {
          headers: { Authorization: `Bearer ${Cookies.get('Authorization')}` },
          params,
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/${endpoint}`,
          config
        )
        setData(response.data)
      } catch (e: any) {
        setError(e.response?.status ?? 500)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return { data, loading, error }
}

export const usePost = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
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
