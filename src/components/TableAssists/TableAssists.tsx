import React from 'react'
import { Space, Table, Tag } from 'antd'
import type { TableProps } from 'antd'

interface DataType {
  id: number
  key: string
  name: string
  rate: string
  tags: string[]
  state?: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Tarifa',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Estado',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 6 ? 'geekblue' : 'green'
          if (tag === 'inactivo') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: 'Estado',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>{record.state}</a>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    id: 1001010011,
    key: '1',
    name: 'John Brown',
    rate: 'Mensual',
    tags: ['activo'],
    state: 'Correcto',
  },
  {
    id: 1111010012,
    key: '2',
    name: 'Jim Green',
    rate: 'Mensual',
    tags: ['inactivo'],
    state: 'Correcto',
  },
  {
    id: 1101010013,
    key: '3',
    name: 'Joe Black',
    rate: 'Tiquera',
    tags: ['activo'],
    state: 'Pendiente',
  },
  {
    id: 1001011014,
    key: '4',
    name: 'Fernando Pulido',
    rate: 'Mensual',
    tags: ['activo'],
    state: 'Correcto',
  },
  {
    id: 1001010015,
    key: '5',
    name: 'Jorge Angulo',
    rate: 'Mensual',
    tags: ['inactivo'],
    state: 'Correcto',
  },
  {
    id: 1001010011,
    key: '1',
    name: 'John Brown',
    rate: 'Mensual',
    tags: ['activo'],
    state: 'Correcto',
  },
  {
    id: 1111010012,
    key: '2',
    name: 'Jim Green',
    rate: 'Mensual',
    tags: ['inactivo'],
    state: 'Correcto',
  },
  {
    id: 1101010013,
    key: '3',
    name: 'Joe Black',
    rate: 'Tiquera',
    tags: ['activo'],
    state: 'Pendiente',
  },
  {
    id: 1001011014,
    key: '4',
    name: 'Fernando Pulido',
    rate: 'Mensual',
    tags: ['activo'],
    state: 'Correcto',
  },
  {
    id: 1001010015,
    key: '5',
    name: 'Jorge Angulo',
    rate: 'Mensual',
    tags: ['inactivo'],
    state: 'Correcto',
  },
  {
    id: 1001010011,
    key: '1',
    name: 'John Brown',
    rate: 'Mensual',
    tags: ['activo'],
    state: 'Correcto',
  },
  {
    id: 1111010012,
    key: '2',
    name: 'Jim Green',
    rate: 'Mensual',
    tags: ['inactivo'],
    state: 'Correcto',
  },
  {
    id: 1101010013,
    key: '3',
    name: 'Joe Black',
    rate: 'Tiquera',
    tags: ['activo'],
    state: 'Pendiente',
  },
  {
    id: 1001011014,
    key: '4',
    name: 'Fernando Pulido',
    rate: 'Mensual',
    tags: ['activo'],
    state: 'Correcto',
  },
  {
    id: 1001010015,
    key: '5',
    name: 'Jorge Angulo',
    rate: 'Mensual',
    tags: ['inactivo'],
    state: 'Correcto',
  },
]

const TableAssists: React.FC = () => (
  <Table columns={columns} dataSource={data} />
)

export default TableAssists
