import { CardProps } from './CardItem'
import CardItem from './CardItem'

const Cards: CardProps[] = [
  { title: 'Total de clientes', NumberClients: 150 },
  { title: 'Clientes nuevos', NumberClients: 10 },
  { title: 'Clientes actvos', NumberClients: 100 },
  { title: 'Total de clientes', NumberClients: 150 },
  { title: 'Clientes nuevos', NumberClients: 10 },
  { title: 'Clientes actvos', NumberClients: 100 },
]

const CardsItems = () => {
  return (
    <div>
      {Cards.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </div>
  )
}
export default CardsItems
