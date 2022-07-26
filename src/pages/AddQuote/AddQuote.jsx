import { useState } from "react"

function AddQuote(props) {
  return (
    <>
      <h1>Add Quote</h1>
      <form autoComplete="off">
        <div className="form-group mb-3">
          <label htmlFor="quote-input" className="form-label">
            Quote (required)
          </label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            name="quote"
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
            required
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
          >
            Add Quote
          </button>
        </div>
      </form>
    </>
  )
}

export default AddQuote