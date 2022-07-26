import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditQuote(props) {
  const location = useLocation()
  const formElement = useRef()
  
  const [formData, setFormData] = useState(location.state.quote)

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const [validForm, setValidForm] = useState(true)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData] )

  return (
    <>
      <h1>Edit Quote</h1>
      <form autoComplete="off" ref={formElement}>
        <div className="form-group mb-3">
          <label htmlFor="quote-input" className="form-label">
            Quote (required)
          </label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="quote"
            value={formData.quote}
            onChange={handleChange}          
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="author-input" className="form-label">
            Author (required)
          </label>
          <input
            type="text"
            className="form-control"
            id="breed-input"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Save Quote
          </button>
        </div>
        <div className="d-grid">
          <Link
            to="/"
            className="btn btn-danger btn-fluid"
          >
            Cancel 
          </Link>
        </div>
      </form>
    </>
  )
}

export default EditQuote