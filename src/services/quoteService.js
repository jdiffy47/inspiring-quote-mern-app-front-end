import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/quotes`

async function create(quote) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(quote)
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function update(quote) {
  const res = await fetch(`${BASE_URL}/${quote._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(quote)
  })
  return res.json()
}

async function addPhoto(photoData, quoteId) {
  const res = await fetch(`${BASE_URL}/${quoteId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

export {
  create,
  getAll,
  deleteOne,
  update,
  addPhoto
}