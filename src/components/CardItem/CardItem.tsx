import React from 'react'
import { Card, Col, Row, Space } from 'antd'

type CardProps = {
  title: string
  numberClients: number
}

const Cards: CardProps[] = [
  { title: 'Total de clientes', numberClients: 150 },
  { title: 'Clientes nuevos', numberClients: 10 },
  { title: 'Clientes activos', numberClients: 100 },
  { title: 'Total de clientes', numberClients: 150 },
  { title: 'Clientes nuevos', numberClients: 10 },
  { title: 'Clientes activos', numberClients: 100 },
]

const CardItem: React.FC<CardProps> = ({ title, numberClients }) => (
  <Card title={title} bordered={false} style={{ width: 450 }}>
    <h1>{numberClients}</h1>
  </Card>
)

export const CardsItems = () => (
  <>
    <Row gutter={16}>
      {Cards.map((card, index) => (
        <Col span={8} key={index}>
          <CardItem key={index} {...card} />
        </Col>
      ))}
    </Row>
    <Space size="large" />
  </>
)

export default CardItem
