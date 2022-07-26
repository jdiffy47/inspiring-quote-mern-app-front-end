import { Link } from "react-router-dom"


function QuoteCard({ quote, randImgId, handleDeleteQuote }) {
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/id/${randImgId}/640/480`}
        alt="Emotional background"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-text">{quote.quote}</h2>
        <p className="card-text">By {quote.author}</p>
      </div>
      <div className="card-footer">
        <button 
          className="btn btn-sm btn-danger m-left"
          onClick={() => handleDeleteQuote(quote._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default QuoteCard