import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../layout/Index'
import Home from '../views/Home/Home'
import Assists from '../views/Assists/Assists'
import Login from '../views/Login/Login'

export default function RoutesPrivate() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Dashboard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/assists" element={<Assists />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
