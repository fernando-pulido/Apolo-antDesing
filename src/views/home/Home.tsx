import { CardsItems } from '../../components/CardItem/CardItem'
import BarGraphic from '../../components/graphics/BarGraphic'
import BarGraphicweek from '../../components/graphics/BarGraphicweek'
import './Home.css'

const Home = () => {
  return (
    <div className="target">
      <CardsItems />

      <BarGraphic />
      <BarGraphicweek />
    </div>
  )
}

export default Home
