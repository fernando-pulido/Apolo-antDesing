import CardItem from '../../components/card/Cards'
import Dashboard from '../../layout/layout'
const Home = () => {
  return (
    <Dashboard>
      <div>
        <CardItem NumberClients={10} title="Clientes nuevos" />
      </div>
    </Dashboard>
  )
}
export default Home
