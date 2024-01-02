import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logInlogout } from "../Redux/authSlice";

const Nav = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => store.loginlogout.isLogin);
  console.log(isLogin);

  useEffect(() => {
    return () => {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
    };
  }, []);

  function handleLogout() {
    let login = localStorage.getItem("token");
    if (login) {
      localStorage.removeItem("token");
      // setIsLogin((pre) => !pre);
      dispatch(logInlogout(false));
      navigate("/login");
    }
  }
  return (
    <div className="nav-container">
      <div className="nav">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/cart">
          <span className="cart">Cart</span>
        </Link>
        <span className="cart-price">0-$0</span>

        {!isLogin ? (
          <Link to="/login">
            <span>Login</span>
          </Link>
        ) : (
          <span className="logout" onClick={handleLogout}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Nav;
