import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span> {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/purchases">Past Purchases</Link>
      &nbsp; | &nbsp;
      <Link to="/shop/new">Shop</Link>     
      &nbsp;| &nbsp;
      <Link to ="/cart">Cart</Link>
      &nbsp;|&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}