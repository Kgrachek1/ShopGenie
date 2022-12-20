import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='nav-wrapper'>
      <img className='brand-logo-left' src="https://i.imgur.com/C7NuZ7r.png" alt="" />
      
      <span> {user.name}</span>
        | 
              
      <Link to="/purchases">Past Purchases</Link>
       | 
      <Link to="/">Shop</Link>     
       |
      <Link to ="/cart">Cart&nbsp;🛒</Link>
       |<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    
  );
}