import { Layout, Menu } from 'antd'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

export type CustomSiderProps = {
  collapsed: boolean
  setCollapsed?: (e: { key: string }) => void
  handlerMenu: (e: { key: string }) => void
}

const CustomSider = ({ collapsed, handlerMenu }: CustomSiderProps) => {
  return (
    <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onClick={handlerMenu}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Asistencia
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          Admin
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          Salir
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default CustomSider
