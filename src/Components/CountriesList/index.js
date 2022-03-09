import './index.css'

const CountriesList = props => {
  const {eachData, onUpdateCountriesList} = props
  const {id, name, isVisited} = eachData

  const onUpdateData = () => {
    onUpdateCountriesList(id)
  }

  return (
    <>
      <li className="list-el" key={id}>
        <div className="wraper">
          <p className="name">{name}</p>
          {isVisited ? (
            <p className="visited">Visited</p>
          ) : (
            <button onClick={onUpdateData} type="button" className="buttons">
              Visit
            </button>
          )}
        </div>
      </li>
      <hr />
    </>
  )
}

export default CountriesList
