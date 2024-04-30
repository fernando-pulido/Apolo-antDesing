import React from 'react'
import { Card } from 'antd'

type CardProps = {
  title: string
  NumberClients: number
  className?: string
}

const CardItem: React.FC<CardProps> = ({ title, NumberClients, className }) => (
  <Card
    className={className}
    title={title}
    bordered={false}
    style={{ width: 450 }}
  >
    <h1>{NumberClients}</h1>
  </Card>
)

export default CardItem
