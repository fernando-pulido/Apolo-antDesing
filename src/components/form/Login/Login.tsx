import { FC } from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'

import './Login.css'

export type FieldType = {
  username?: string
  password?: string
  remember?: string
}

type LoginProps = {
  onFinish: FormProps<FieldType>['onFinish']
  onFinishFailed: FormProps<FieldType>['onFinishFailed']
  title: string
}

const { Item: Element } = Form
const Item = Element<FieldType>

const LoginUser: FC<LoginProps> = ({ onFinish, onFinishFailed, title }) => (
  <div className="login">
    <h1>{title}</h1>

    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Item>

      <Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Item>

      <Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  </div>
)

export default LoginUser
