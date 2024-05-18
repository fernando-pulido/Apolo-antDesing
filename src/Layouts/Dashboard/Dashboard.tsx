import { Layout } from 'antd'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RoutesPrivate from '../../routes/routes'
import CustomSider from '../../components/CustomSider'
import HeaderDashboard from '../../components/HeaderDashboard'

import styles from './Dashboard.module.css'

const { Content, Footer } = Layout

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const handleCollapsed = () => setCollapsed(!collapsed)

  const textFooter = `Apolo gym©${new Date().getFullYear()} team`

  return (
    <Layout>
      <Router>
        <CustomSider collapsed={collapsed} />
        <Layout>
          <HeaderDashboard onClick={handleCollapsed} collapsed={collapsed} />
          <Content className={styles.content}>
            <RoutesPrivate />
          </Content>
          <Footer className={styles['footer-dashboard']}>{textFooter}</Footer>
        </Layout>
      </Router>
    </Layout>
  )
}

export default Dashboard
