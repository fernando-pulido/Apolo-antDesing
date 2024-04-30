import Dashboard from '../../layout/layout'
import LoginUser from '../../components/Login/Login'

export default function Login() {
  return (
    <Dashboard>
      <div>{<LoginUser />}</div>
    </Dashboard>
  )
}
