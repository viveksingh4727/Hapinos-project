import { useContext, useState } from "react";
import { LOGO_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName,setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  
  //selector : subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items)


    return (
      <div className="flex justify-between bg-orange-300 shadow-lg m-2">
        <div className="logo-conatiner">
        <img
          className="w-36"
          alt="logo"
          src={LOGO_URl}
        />
        </div>  
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status {onlineStatus ?  "✅" : "🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to = "/about">About us</Link></li>
            <li className="px-4"><Link to="/contact" >Contact us</Link></li>
            <li className="px-4"><Link to= "/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-xl"> <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className="px-4"
            onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName('Login') }
            >{btnName}</button>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  