import { useState } from "react";
import { LOGO_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName,setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();

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
            <li className="px-4">Cart</li>
            <button className="px-4"
            onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName('Login') }
            >{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  