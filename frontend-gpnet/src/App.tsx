import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Blog from './pages/blog/Blog'
import Post from './pages/blog/Post'
import News from './pages/news/News'
import Museum from './pages/museum/Museum'
import Space from './pages/space/Space'
import TecBlog from './pages/tecblog/TecBlog'


function App() {
  return(
  <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Blog />} /> 
        <Route path="/post" element={<Post />} /> 
      </Route>
      <Route path="/jornal" element={<News />} />
      <Route path="/museu" element={<Museum />} /> 
      <Route path="/space" element={<Space />} /> 
      <Route path="/tecblog" element={<TecBlog />} /> 
    </Routes>
  )
}

export default App