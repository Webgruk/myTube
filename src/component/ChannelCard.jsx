import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '400px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={channelDetail?.thumbnail[0]?.url || demoProfilePicture}
          alt={channelDetail?.title}
          sx={{
            borderRadius: '50%',
            minHeight: '270px',
            minWidth: '100px',
            mb: 2,
            boxSizing: 'border-box',
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant="h7">
          {channelDetail?.title.slice(0, 50)}
          {/* <CheckCircleIcon
            sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
          /> */}
        </Typography>
        {channelDetail?.viewCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.viewCount).toLocaleString('en-US')}{' '}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard
