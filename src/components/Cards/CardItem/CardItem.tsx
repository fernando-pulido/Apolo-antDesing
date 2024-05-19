import { Card } from 'antd'

import { CARD_ITEMS } from './mock'
import styles from './CardItem.module.css'

const CardsItem = () => (
  <div className={styles.container}>
    {CARD_ITEMS.map(({ numberClients, title, information }, key) => (
      <Card title={title} bordered={false} key={key}>
        <h1>{numberClients}</h1>
        {information && <p>{information}</p>}
      </Card>
    ))}
  </div>
)

export default CardsItem
