import Sub from '../types'
import moment from 'moment'

interface Props {
    subs: Array<Sub>
}

export default function List({subs} : Props) {
    return (
        <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.name}>
                <img src={sub.avatar} alt={sub.description} />
                <h4>{sub.name}</h4>
                <h3>{moment(sub.birthday).format('MMMM Do YYYY')}</h3>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    )
}