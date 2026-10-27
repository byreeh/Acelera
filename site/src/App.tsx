import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Blog from './pages/blog/Blog'
import Post from './pages/blog/Post'


function App() {
  return(
  <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Blog />} /> 
        <Route path="/post" element={<Post />} /> 
      </Route>
    </Routes>
  )
}

export default App