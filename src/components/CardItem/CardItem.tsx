import React from 'react'
import { Card } from 'antd'

import './CardItem.css'
type CardProps = {
  title: string
  numberClients: number
  information?: string
}

const Cards: CardProps[] = [
  { title: 'Total de clientes', numberClients: 150 },
  {
    title: 'Clientes nuevos',
    numberClients: 10,
  },
  { title: 'Clientes activos', numberClients: 100 },
  { title: 'Proximos a vencer ', numberClients: 150 },
  { title: 'Clientes a credito', numberClients: 10 },
  { title: 'Cumpleaños de clientes ', numberClients: 100 },
]

const CardItem: React.FC<CardProps> = ({ title, numberClients }) => (
  <Card className="card" title={title} bordered={false}>
    <h1>{numberClients}</h1>
  </Card>
)

export const CardsItems = () => (
  <div className="container">
    {Cards.map((card, index) => (
      <CardItem key={index} {...card} />
    ))}
  </div>
)

export default CardItem
