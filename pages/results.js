import { useSelector } from 'react-redux'

const ResultsPage = () => {
  const data = useSelector((state) => state.data)

  return (

    <ul>
        {data.data.map((car, index) => (
          <li key={index}>
            {car.make} {car.model} (£{car.avg_price})
          </li>
        ))}
        </ul>
  )
}

export default ResultsPage