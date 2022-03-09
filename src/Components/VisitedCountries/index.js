import './index.css'

const VisitedCountries = props => {
  const {data, onDeleteVisited} = props
  const {id, name, imageUrl} = data

  const onRemoveVisited = () => {
    onDeleteVisited(id)
  }

  return (
    <li className="visited-list">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="div-wraper">
        <p>{name}</p>
        <button onClick={onRemoveVisited} type="button" className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
