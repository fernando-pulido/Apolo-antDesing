import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'

const { Header } = Layout

type ButtonProps = {
  collapsed: boolean
  onClick: () => void
}

const HeaderDasboard = ({ collapsed, onClick }: ButtonProps) => {
  return (
    <Header className="header">
      <Button
        className="button"
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onClick}
      />
    </Header>
  )
}
export default HeaderDasboard
