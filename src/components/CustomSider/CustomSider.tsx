import { Layout, Menu, MenuProps } from 'antd'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { ReactElement } from 'react'

const { Sider } = Layout

export type CustomSiderProps = {
  collapsed: boolean
  handleMenu: MenuProps['onClick']
}

type Items = {
  label: string
  icon: ReactElement
  key: string
}

const items: Items[] = [
  {
    label: 'Inicio',
    icon: <UserOutlined />,
    key: 'Inicio',
  },
  {
    label: 'Asistencia',
    icon: <VideoCameraOutlined />,
    key: 'Asistencia',
  },
  {
    label: 'Login',
    icon: <UploadOutlined />,
    key: 'Login',
  },
  {
    label: 'Admin',
    icon: <VideoCameraOutlined />,
    key: 'Admin',
  },

  {
    label: 'Clientes',
    icon: <UploadOutlined />,
    key: 'Clientes',
  },
  {
    label: 'Proveedores',
    icon: <VideoCameraOutlined />,
    key: 'Proveedores',
  },
  {
    label: 'Salir',
    icon: <UploadOutlined />,
    key: 'Salir',
  },
]

const CustomSider = ({ collapsed, handleMenu }: CustomSiderProps) => (
  <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu
      items={items}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={handleMenu}
    />
  </Sider>
)

export default CustomSider
