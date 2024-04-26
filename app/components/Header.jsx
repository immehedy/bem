"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authAccessToken } from "../utils/authAccessToken";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("info");
    window.location.replace("/signin");
  };
  const token = authAccessToken();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token, router.events]);
  return (
    <nav className="bg-primary text-white w-full h-[60px] py-2">
      <div className="flex items-center justify-between container">
        <p className="text-3xl font-bold">BEM</p>
        {isLoggedIn && (
          <p className="font-semibold cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
        )}
      </div>
    </nav>
  );
};

export default Header;
