import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

// import { Videos, ChannelCard } from './'

import { fetchChannelAPI, fetchFromAPI } from '../utils/fetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState()
  console.log(
    '🚀 ~ file: ChannelDetail.jsx:10 ~ ChannelDetail ~ channelDetail:',
    channelDetail,
  )
  const [videos, setVideos] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetchChannelAPI(`channel`, id)

      setChannelDetail(res.data[0])

      const videosData = await fetchChannelAPI(`playlist`, id)

      setVideos(videosData?.data)
    }

    fetchResults()
  }, [id])

  return (
    <Box minHeight="95vh" sx={{ backgroundColor: '#000' }}>
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex" sx={{}}>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
