import './App.css'
import { Suspense } from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Search from './pages/Search'
import Layout from './layout/Layout'
import Login from './pages/Login'
import Playlist from './pages/Playlist'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/playlist/:id' element={<Playlist/>} />
            </Route>
            <Route path='/login' element={<Login/>} />
            <Route path='/settings' element={<div>settings layout</div>} />
        </Routes>
    )
}

export default App
