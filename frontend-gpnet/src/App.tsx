import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Blog from './pages/blog/Blog'
import Post from './pages/blog/Post'
import News from './pages/news/News'


function App() {
  return(
  <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Blog />} /> 
        <Route path="/post" element={<Post />} /> 
      </Route>
      <Route path="/jornal" element={<News />} />
    </Routes>
  )
}

export default App