import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../routes/layout.jsx'
import Create from '../routes/create.jsx'
import Detail from '../routes/detail.jsx'
import Update from '../routes/update.jsx'
import Read from '../routes/read.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Read />} />
            <Route index={false} path="/AddCreator" element={<Create />} />
            <Route index={false} path="/ViewCreator/:id" element={<Detail />} />
            <Route index={false} path="/EditCreator/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
