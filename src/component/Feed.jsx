import { Box, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import axios from 'axios'

import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)
  console.log('🚀 ~ file: Feed.jsx:12 ~ Feed ~ videos:', videos)

  useEffect(() => {
    setVideos(null)
    fetchFromAPI(`search`, selectedCategory).then((res) => setVideos(res.data))
  }, [selectedCategory])
  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' },
        backgroundColor: '#000',
      }}
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 wabbit
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory}
          <span style={{ color: '#FC1503' }}> videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
