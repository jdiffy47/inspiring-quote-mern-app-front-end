import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="App-header">
        Some Inspiring shizznizz
      
      {user ?
        <nav>
            Welcome, {user.name}
            <Link to="/">Quotes</Link>           
            <Link to="/add">Add a Quote</Link>           
            <Link to="/profiles">Profiles</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
            <Link to="/changePassword">Change Password</Link>
          
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
      </header>
    </>
  )
}

export default NavBar
