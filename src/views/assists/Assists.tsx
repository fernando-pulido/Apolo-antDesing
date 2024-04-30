import TableAssists from '../../components/TableAssists/Index'
import Dashboard from '../../layout/Index'

const Assists = () => {
  return (
    <Dashboard>
      {
        <div>
          <h1>ASISTENCIA TOTAL</h1>
          <TableAssists />
        </div>
      }
    </Dashboard>
  )
}

export default Assists
