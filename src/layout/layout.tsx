import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from 'antd'

import type { PropsWithChildren } from 'react'
import type { MenuProps } from 'antd'

import CustomSider from '../components/CustomSider/Index'
import HeaderDashboard from '../components/HeaderDashboard/Index'

import './layout.css'

const { Content, Footer } = Layout

const Dashboard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const handleMenu: MenuProps['onClick'] = e => {
    if (e.key === 'Inicio') {
      navigate('/home')
    }
    if (e.key === 'Asistencia') {
      navigate('/assists')
    }
    if (e.key === 'Admin') {
      console.log('first')
    }
    if (e.key === 'Login') {
      console.log('first 5')
      navigate('/login')
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
        <Footer className="footer" style={{ textAlign: 'center' }}>
          Fernando pulido©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard
