import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { fetchChannelAPI } from '../utils/fetchFromApi'
import Videos from './Videos'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  console.log(
    '🚀 ~ file: VideoDetail.jsx:12 ~ VideoDetail ~ videoDetail:',
    videoDetail,
  )

  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchChannelAPI(`video`, id).then((data) => setVideoDetail(data))

    fetchChannelAPI(`related`, id).then((data) => setVideos(data.data))
  }, [id])

  // if(!videoDetail?.snippet) return <Loader />;
  let title, channelId, channelTitle, viewCount

  if (videoDetail) {
    const {
      title: vTitle,
      channelId: Channel,
      channelTitle: ChannelTitle,
      viewCount: ViewCount,
    } = videoDetail
    title = vTitle
    channelId = Channel
    channelTitle = ChannelTitle
    viewCount = ViewCount
  }

  return (
    <Stack sx={{ background: '#000' }}>
      <Box
        sx={{
          margin: 'auto',
          display: 'block',
          width: '80%',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          className="card_container"
        >
          <Box className="video_card">
            <Box className="boxPlayer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: '#fff' }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: 'subtitle1', md: 'h6' }}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            className="videos"
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </Stack>
    // <Box minHeight="95vh" sx={{ background: '#000' }}>
    //   <Stack direction={{ xs: 'column', md: 'row' }}>
    //     <Box className="video_box">
    //       <Box>
    //         <ReactPlayer
    //           url={`https://www.youtube.com/watch?v=${id}`}
    //           className="react-player"
    //           controls
    //         />
    //         <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
    //           {title}
    //         </Typography>
    //         <Stack
    //           direction="row"
    //           justifyContent="space-between"
    //           sx={{ color: '#fff' }}
    //           py={1}
    //           px={2}
    //         >
    //           <Link to={`/channel/${channelId}`}>
    //             <Typography
    //               variant={{ sm: 'subtitle1', md: 'h6' }}
    //               color="#fff"
    //             >
    //               {channelTitle}
    //               <CheckCircleIcon
    //                 sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
    //               />
    //             </Typography>
    //           </Link>
    //           <Stack direction="row" gap="20px" alignItems="center">
    //             <Typography variant="body1" sx={{ opacity: 0.7 }}>
    //               {parseInt(viewCount).toLocaleString()} views
    //             </Typography>
    //           </Stack>
    //         </Stack>
    //       </Box>
    //     </Box>
    //     <Box
    //       px={2}
    //       py={{ md: 1, xs: 5 }}
    //       justifyContent="center"
    //       alignItems="center"
    //     >
    //       <Videos videos={videos} direction="column" />
    //     </Box>
    //   </Stack>
    // </Box>
  )
}

export default VideoDetail
