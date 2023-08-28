import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

import { PropTypes } from 'prop-types'

const Videos = ({ videos }) => {
  // if(!videos?.length) return <Loader />;

  return (
    <Stack
      direction={'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.videoId && <VideoCard video={item} />}
          {item.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
Videos.propTypes = {
  videos: PropTypes.any,
}
