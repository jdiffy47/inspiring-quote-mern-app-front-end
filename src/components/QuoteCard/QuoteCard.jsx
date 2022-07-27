import { Link } from "react-router-dom"


function QuoteCard({ quote, randImgId, handleDeleteQuote, user }) {
  return (
    <div className="card">
      <img
        src={
            quote.photo
            ? quote.photo
            : `https://picsum.photos/id/${randImgId}/640/480`
        }
        alt="A happy quote"
        className="card-img-top"
        style={{ width: "640px" }}
      />
      <div className="card-body">
        <h2 className="card-text">{quote.quote}</h2>
        <p className="card-text">By {quote.author}</p>
      </div>
        {user?.profile === quote.owner._id &&
          <div className="card-footer">
            <Link
              className="btn btn-sm btn-warning"
              to="/edit"
              state={{quote}}
            >
              Edit
            </Link>
            <button 
              className="btn btn-sm btn-danger m-left"
              onClick={() => handleDeleteQuote(quote._id)}
            >
              Delete
            </button>
          </div>
        }
    </div>
  )
}

export default QuoteCard