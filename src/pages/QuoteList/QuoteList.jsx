import styles from './QuoteList.module.css'
import QuoteCard from '../../components/QuoteCard/QuoteCard'

const imgIds = [1000, 100, 1002, 1004]

function QuoteList(props) {
  return (
    <>
      <h1>Quote List</h1>
      <div className={styles.container}>
        {props.quotes.map(quote =>
          <QuoteCard 
            key={quote._id} 
            quote={quote} 
            randImgId={imgIds[Math.floor(Math.random() * (imgIds.length))]} 
            handleDeleteQuote={props.handleDeleteQuote}
            user={props.user}
          />         
        )}
      </div>
    </>
  )
}

export default QuoteList