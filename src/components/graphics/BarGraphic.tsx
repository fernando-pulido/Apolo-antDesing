import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

type Options = {
  responsive: boolean
  animation: boolean
  plugins: {
    legend: {
      display: boolean
    }
  }
  scales: {
    y: {
      min: number
      max: number
    }
    x: {
      ticks: {
        color: string
      }
    }
  }
}

const misoptions: Options = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: {
        color: 'rgba(, 220, 195)',
      },
    },
  },
}

const beneficios: number[] = [72, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60]
const meses: string[] = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

const midata = {
  labels: meses,
  datasets: [
    {
      label: 'Beneficios',
      data: beneficios,
      backgroundColor: 'rgba(0, 220, 195, 0.5)',
    },
  ],
}

const BarGraphic: React.FC = () => {
  return <Bar data={midata} options={misoptions} />
}

export default BarGraphic
