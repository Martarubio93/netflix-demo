import {Link} from 'react-router-dom'

const filmDetail = (props) => {
  const data = props.getRoute
  console.log(data)
    return(
        <Link className="link" to="/">
        
        <div className="carddetail">
          <img
            className="carddetail__img"
            src={data.image}
            alt=""
          />

          <ul >
            <h2 ></h2>
            
            <li>Especie: </li>
            <li>Género: </li>
            <li> Casa: </li>
          </ul>
          {}
        </div>
      </Link>

    )
}

export default filmDetail