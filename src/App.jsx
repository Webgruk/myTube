import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Navbar from './component/Navbar'
import Feed from './component/Feed'
import VideoDetail from './component/VideoDetail'
import ChannelDetail from './component/ChannelDetail'
import SearchFeed from './component/SearchFeed'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
