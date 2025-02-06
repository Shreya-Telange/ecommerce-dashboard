import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";


const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item) => (
            <li key={item.id} className="flex justify-between border p-4 rounded-lg">
              <Link to={`/product/${item.id}`} className="text-blue-600">{item.title}</Link>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist; // ✅ Ensure default export is present
