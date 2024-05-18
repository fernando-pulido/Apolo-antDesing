import type { FormProps } from 'antd'

import LoginUser, { type FieldType } from '../../components/form/Login/Login'

const Login = () => {
  const handleFinish: FormProps<FieldType>['onFinish'] = values =>
    console.log('Success:', values)

  const handleFinishFailed: FormProps<FieldType>['onFinishFailed'] =
    errorInfo => console.log('Failed:', errorInfo)

  return (
    <LoginUser
      title="Apolo Gym"
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    />
  )
}

export default Login
