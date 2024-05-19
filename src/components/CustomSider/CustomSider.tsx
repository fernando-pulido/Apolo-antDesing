import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { ReactElement } from 'react'

const { Sider } = Layout

export type CustomSiderProps = {
  collapsed: boolean
}

type Items = {
  label: ReactElement
  icon: ReactElement
  key: string
}
const LINKS = {
  home: '/home',
  assists: '/assists',
  login: '/login',
  admin: '/admin',
  clientes: '/clientes',
  proveedores: '/proveedores',
}

const items: Items[] = [
  {
    label: <Link to={LINKS.home}>Inicio</Link>,
    icon: <UserOutlined />,
    key: 'Inicio',
  },
  {
    label: <Link to={LINKS.assists}>Asistencia</Link>,
    icon: <VideoCameraOutlined />,
    key: 'Asistencia',
  },
  {
    label: <Link to={LINKS.login}>login</Link>,
    icon: <UploadOutlined />,
    key: 'Login',
  },
  {
    label: <Link to={LINKS.admin}>Admin</Link>,
    icon: <VideoCameraOutlined />,
    key: 'Admin',
  },

  {
    label: <Link to={LINKS.clientes}>Clientes</Link>,
    icon: <UploadOutlined />,
    key: 'Clientes',
  },
  {
    label: <Link to={LINKS.proveedores}>proveedores</Link>,
    icon: <VideoCameraOutlined />,
    key: 'Proveedores',
  },
]

const CustomSider = ({ collapsed }: CustomSiderProps) => (
  <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu
      items={items}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    />
  </Sider>
)

export default CustomSider
