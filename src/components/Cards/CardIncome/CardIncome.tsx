import { Card, Row, Col } from 'antd'

import './CardIncome.css'

type CardsProps = {
  title: string
  today: string
  week: string
  month: string
  amount: number
}

const Cards: CardsProps[] = [
  {
    title: 'IINGRESOS PAGOS',
    today: 'hoy',
    week: 'Semana',
    month: 'Mes',
    amount: 0,
  },
  {
    title: 'IINGRESOS VENTAS',
    today: 'hoy',
    week: 'Semana',
    month: 'Mes',
    amount: 0,
  },
  {
    title: 'EGRESOS COMPRAS',
    today: 'hoy',
    week: 'Semana',
    month: 'Mes',
    amount: 0,
  },
  {
    title: 'EGRESOS GASTOS',
    today: 'hoy',
    week: 'Semana',
    month: 'Mes',
    amount: 0,
  },
]

const CardIncome: React.FC<CardsProps> = ({
  title,
  month,
  today,
  week,
  amount,
}) => {
  return (
    <Card title={title} bordered={false}>
      <Row gutter={20}>
        <Col span={8}>
          <p>{today}</p>
          <p>{amount}</p>
        </Col>
        <Col span={8}>
          <p>{week}</p>
          <p>{amount}</p>
        </Col>
        <Col span={8}>
          <p>{month} </p>
          <p>{amount}</p>
        </Col>
      </Row>
    </Card>
  )
}

const ArrayCard = () => (
  <div className="cardsItems">
    {Cards.map((card, index) => (
      <CardIncome key={index} {...card} />
    ))}
  </div>
)

export default ArrayCard
