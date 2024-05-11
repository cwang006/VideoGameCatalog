import React, { useState, useEffect } from "react";
import GameRow from "../../components/GameRow/GameRow";
import Loading from "../../components/Loading/Loading";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/wishlist/retrieve", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        });
        const data = await response.json();
        setWishlist(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  }, []);

  // Filter game list when a game is removed from wishlist
  const filterGames = (id) => {
    const filteredGames = wishlist.filter((gameId) => gameId !== id);
    setWishlist(filteredGames);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mt-5 mb-4">My Wishlist</h2>
          {wishlist.length > 0 ? (
            <ul>
              {wishlist.map((id) => (
                <li key={id} className="mb-3">
                  <GameRow id={id} onClick={filterGames} />
                </li>
              ))}
            </ul>
          ) : (
            <h2>You haven't add any games to wishlist. Find games you like!</h2>
          )}
        </div>
      )}
    </>
  );
};

export default WishlistPage;
