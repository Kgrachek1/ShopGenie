import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/orders">Past Purchases</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">Cart</Link>
      &nbsp;&nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}