import { CardsItems } from '../../components/Cards/CardItem/CardItem'
import CardIncome from '../../components/Cards/CardIncome/CardIncome'
import BarGraphic from '../../components/graphics/BarGraphic'
import BarGraphicweek from '../../components/graphics/BarGraphicweek'

import './Home.css'

const Home = () => {
  return (
    <div>
      <CardsItems />
      <CardIncome />

      <div>
        <BarGraphic />
        <BarGraphicweek />
      </div>
    </div>
  )
}

export default Home
