import { FC } from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'

import img1 from '../../../img/Apolo.png'
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

const LoginUser: FC<LoginProps> = ({ onFinish, onFinishFailed }) => (
  <div className="login">
    <div className="login-container">
      <img src={img1} alt="logo de apolo gym" />

      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="custom-form"
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
            Ingresa ApoloGym
          </Button>
        </Item>
      </Form>
    </div>
  </div>
)

export default LoginUser
