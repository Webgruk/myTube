import axios from 'axios'

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com'

const API_KEY = import.meta.env.VITE_API_KEY

export const fetchFromAPI = async (url, item) => {
  const options = {
    params: {
      query: item,
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
    },
  }

  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
export const fetchChannelAPI = async (url, item) => {
  const options = {
    params: {
      id: item,
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
    },
  }

  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
