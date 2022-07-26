import { useState, useRef, useEffect } from "react"

function AddQuote(props) {
  const [formData, setFormData] = useState({
    quote: '',
    author: ''
  })

  const [photoData, setPhotoData] = useState({})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddQuote(formData, photoData.photo)
  }

  const handleChangePhoto = evt => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  return (
    <>
      <h1>Add Quote</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
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
        <div className="form-group mb-4">
          <label htmlFor="photo-upload" className="form-label">
            Upload Photo
          </label>
          <input
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Add Quote
          </button>
        </div>
      </form>
    </>
  )
}

export default AddQuote