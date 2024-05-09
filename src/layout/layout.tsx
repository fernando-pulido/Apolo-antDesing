import { Layout } from 'antd'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RoutesPrivate from '../routes/routes'
import CustomSider from '../components/CustomSider/Index'
import HeaderDashboard from '../components/HeaderDashboard/Index'

import './layout.css'

const { Content, Footer } = Layout

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleCollapsed = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Router>
        <CustomSider collapsed={collapsed} />
        <Layout>
          <HeaderDashboard onClick={handleCollapsed} collapsed={collapsed} />
          <Content>
            <RoutesPrivate />
          </Content>
          <Footer className="footer" style={{ textAlign: 'center' }}>
            Apolo gym©{new Date().getFullYear()} team
          </Footer>
        </Layout>
      </Router>
    </Layout>
  )
}

export default Dashboard
