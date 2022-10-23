import Mate from '../types'
import moment from 'moment'

interface Props {
    mates: Array<Mate>
}

export default function List({mates} : Props) {
    return (
        <ul>
        {
          mates.map(mate => {
            return (
              <li key={mate.name}>
                <img src={mate.avatar} alt={mate.description} />
                <h4>{mate.name}</h4>
                <h3>{moment(mate.birthday).format('MMMM Do YYYY')}</h3>
                <p>{mate.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    )
}