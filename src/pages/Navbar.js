import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon from react-icons

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopEase</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li> {/* ✅ Add wishlist link */}
        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart size={24} /> {/* Cart icon */}
            
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
