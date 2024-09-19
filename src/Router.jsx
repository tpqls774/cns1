import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './page/Home'
import Create from './page/Create'
import Login from './page/Login'
import Image from './page/Image'
import NotFound from './page/NotFound'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/image' element={<Image/>} />
            <Route path='/*' element={<NotFound/>} />
        </Routes>
    )
}

export default Router
