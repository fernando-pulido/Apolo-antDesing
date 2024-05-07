import { useState } from 'react'
import { Router, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import type { PropsWithChildren } from 'react'
import type { MenuProps } from 'antd'
import CustomSider from '../components/CustomSider/Index'
import HeaderDashboard from '../components/HeaderDashboard/Index'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import Assists from '../views/Assists/Assists'
import './layout.css'

const { Content, Footer } = Layout

const Dashboard = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const handleMenu: MenuProps['onClick'] = e => {
    switch (e.key) {
      case 'Inicio':
        navigate('/')
        break
      case 'Asistencia':
        navigate('/assists')
        break

      default:
        break
    }
  }

  return (
    <Layout>
      <CustomSider collapsed={collapsed} handleMenu={handleMenu} />
      <Layout>
        <HeaderDashboard
          onClick={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
        />

        <Content className="content">{children}</Content>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="assists" element={<Assists />} />
          </Routes>
        </Router>
        <Footer className="footer" style={{ textAlign: 'center' }}>
          Fernando pulido©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard
