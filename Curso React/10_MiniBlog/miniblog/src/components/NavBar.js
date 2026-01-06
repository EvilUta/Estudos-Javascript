import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        Mini <span>Blog</span>
      </NavLink>

      <ul className={styles.links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">Profile</NavLink>
        </li>

        {/* NÃO LOGADO */}
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}

        {/* LOGADO */}
        {user && (
          <>
            <li>
              <NavLink to="/posts/create">Create Post</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>

            <li className={styles.user}>
              {user.displayName || user.email}
            </li>

            <li>
              <button onClick={logout} className={styles.logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
