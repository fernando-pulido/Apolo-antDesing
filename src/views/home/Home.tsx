import CardActiveClients from '../../components/CardItem/CardActiveClients/CardActiveClients'
import CardNewCustomer from '../../components/CardItem/CardNewCustomer/Index'
import CardSoonExpire from '../../components/CardItem/CardSoonExpire/CardSoonExpire'
import CardTotalClients from '../../components/CardItem/CardTotalClients/CardTotalClients'
import Dashboard from '../../layout/layout'
import CardCreditCustomers from '../../components/CardItem/CardCreditCustomers/CardCreditCustomers.tsx'
import './Home.css'

const Home = () => {
  return (
    <Dashboard>
      {
        <div className="target">
          <div className="card">
            <CardTotalClients />
          </div>
          <div className="card">
            <CardNewCustomer />
          </div>
          <div className="card">
            <CardActiveClients />
          </div>
          <div className="expire">
            <CardSoonExpire />
          </div>
          <div className="expire">
            <CardCreditCustomers />
          </div>
        </div>
      }
    </Dashboard>
  )
}

export default Home
