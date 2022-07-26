import styles from './QuoteList.module.css'

function QuoteList(props) {
  return (
    <>
      <h1>Quote List</h1>
      <div className={styles.container}>
        {props.quotes.map(quote =>
          <div key={quote._id}>
            <p>Quote Name: {quote.quote}</p>
            <p>Breed: {quote.author}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default QuoteList