import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../views/Home'
import Admin from '../views/Admin/Admin'
import Login from '../views/Login/Login'
import Assists from '../views/Assists/Assists'
import Clients from '../views/Clients/Clients'
import Suppliers from '../views/Suppliers/Suppliers'

export default function RoutesPrivate() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/assists" element={<Assists />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/clientes" element={<Clients />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/proveedores" element={<Suppliers />}></Route>rg
      <Route path="*" element={<Navigate replace to="/" />}></Route>
    </Routes>
  )
}
