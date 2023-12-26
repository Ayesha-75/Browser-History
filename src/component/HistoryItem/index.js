import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-container">
      <div className="each-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="img" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
