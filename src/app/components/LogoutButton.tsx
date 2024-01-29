"use client";

import { logout } from "../lib/actions";

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
