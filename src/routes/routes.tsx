import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../layout/layout'
import Home from '../views/home/Home'
import Assists from '../views/assists/Assists'

export default function RoutesPrivate() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Dashboard />}></Route>
          <Route path="/index" element={<Home />}></Route>
          <Route path="/assists" element={<Assists />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
