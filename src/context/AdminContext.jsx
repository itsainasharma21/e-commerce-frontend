import React, { createContext, useEffect, useState } from "react";

// Create the context
export const AdminContext = createContext();

// Create the provider component
export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = sessionStorage.getItem("isAdmin");
    setIsAdmin(adminStatus === "true");
  }, []);

  const loginAsAdmin = () => {
    sessionStorage.setItem("isAdmin", "true");
    setIsAdmin(true);
  };

  const logoutAdmin = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
