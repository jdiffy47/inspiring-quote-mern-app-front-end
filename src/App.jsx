import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddQuote from './pages/AddQuote/AddQuote'
import QuoteList from './pages/QuoteList/QuoteList'
import EditQuote from './pages/EditQuote/EditQuote'
import * as quoteService from './services/quoteService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [quotes, setQuotes] = useState([])

  const handleAddQuote = async (newQuoteData, photo) => {
    const newQuote = await quoteService.create(newQuoteData)
    if (photo) {
      newQuote.photo = await quotePhotoHelper(photo, newQuote._id)
    }
    setQuotes([...quotes, newQuote])
    navigate('/')
  }

  const quotePhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await quoteService.addPhoto(photoData, id)
  }

  const handleDeleteQuote = async id => {
    const deletedQuote = await quoteService.deleteOne(id)
    setQuotes(quotes.filter(quote => quote._id !== id))
  }

  const handleUpdateQuote = async updatedQuoteData => {
    const updatedQuote = await quoteService.update(updatedQuoteData)
    const newQuoteArray = quotes.map(quote => 
      quote._id === updatedQuote._id ? updatedQuote : quote
      )
      setQuotes(newQuoteArray)
      navigate('/')
  }

  useEffect(() => {
    const fetchAllQuotes = async () => {
      const quoteData = await quoteService.getAll()
      setQuotes(quoteData)
    }
    fetchAllQuotes()
  }, [])

  return (
      <>
        <div className="App">
          <NavBar user={user} handleLogout={handleLogout} />
          <main>
            <Routes>
              <Route
                path="/signup"
                element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
              />
              <Route
                path="/login"
                element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
              />
              <Route
                path="/"
                element={<QuoteList quotes={quotes} handleDeleteQuote={handleDeleteQuote} user={user} />}
              />
              <Route
                path="/add"
                element={<AddQuote handleAddQuote={handleAddQuote} />}
              />
              <Route
                path="/edit"
                element={<EditQuote handleUpdateQuote={handleUpdateQuote} />}
              />
              <Route
                path="/profiles"
                element={user ? <Profiles /> : <Navigate to="/login" />}
              />
              <Route
                path="/changePassword"
                element={
                  user ? (
                    <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Routes>
          </main>
        </div>
    </>
  )
}

export default App
