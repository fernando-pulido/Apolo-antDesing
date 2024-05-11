import React from 'react'
import { Card, Col } from 'antd'

import './CardItem.css'
type CardProps = {
  title: string
  numberClients: number
}

const Cards: CardProps[] = [
  { title: 'Total de clientes', numberClients: 150 },
  { title: 'Clientes nuevos', numberClients: 10 },
  { title: 'Clientes activos', numberClients: 100 },
  { title: 'Proximos a vencer ', numberClients: 150 },
  { title: 'Clientes a credito', numberClients: 10 },
  { title: 'Cumpleaños de clientes ', numberClients: 100 },
]

const CardItem: React.FC<CardProps> = ({ title, numberClients }) => (
  <Card title={title} bordered={false} style={{ width: 450 }}>
    <h1>{numberClients}</h1>
  </Card>
)

export const CardsItems = () => (
  <div className="cards-container">
    {Cards.map((card, index) => (
      <Col span={8} key={index}>
        <CardItem key={index} {...card} />
      </Col>
    ))}
  </div>
)

export default CardItem
