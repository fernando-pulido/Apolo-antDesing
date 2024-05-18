import { Card, Row, Col } from 'antd'

import { CARDS } from './mock'

import './CardIncome.css'

const CardIncome = () => (
  <>
    {CARDS.map(({ amount, month, title, today, week }, index) => (
      <Card title={title} bordered={false} key={index}>
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
    ))}
  </>
)

export default CardIncome
