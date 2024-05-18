import { Card } from 'antd'

import { CARD_ITEMS } from './mock'
import styles from './CardItem.module.css'

const CardsItem = () => (
  <div className={styles.container2}>
    {CARD_ITEMS.map(({ numberClients, title, information }, key) => (
      <Card
        title={title}
        bordered={false}
        key={key}
        className={styles['col-3']}
      >
        <h1>{numberClients}</h1>
        {information && <p>{information}</p>}
      </Card>
    ))}
  </div>
)

export default CardsItem
