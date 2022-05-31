// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card-container ${className}`}>
      <h1 className="course-name">{title}</h1>
      <p className="course-details">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
