import React from 'react'
import { Card } from 'antd'

export type CardProps = {
  title: string
  NumberClients: number
}

const CardItem: React.FC<CardProps> = ({ title, NumberClients }) => (
  <Card title={title} bordered={false} style={{ width: 450 }}>
    <h1>{NumberClients}</h1>
  </Card>
)

export default CardItem
