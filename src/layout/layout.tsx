import { useState } from 'react'
import type { PropsWithChildren } from 'react'

import { useNavigate } from 'react-router-dom'

import { Layout } from 'antd'
import type { MenuProps } from 'antd'
import CustomSiderProps from '../components/sider/Sider'
import HeaderDasboard from '../components/header/Header'
import './content.css'

const { Content, Footer } = Layout

const Dashboard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const handlerMenu: MenuProps['onClick'] = e => {
    if (e.key === '1') {
      navigate('/index')
    }
    if (e.key === '2') {
      navigate('/assists')
    }
  }

  return (
    <Layout>
      <CustomSiderProps collapsed={collapsed} handlerMenu={handlerMenu} />
      <Layout>
        <HeaderDasboard
          onClick={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
        />
        <Content className="content">{children}</Content>
        <Footer className="footer" style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard
