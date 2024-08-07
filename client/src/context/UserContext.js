import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import * as jose from "jose";
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [userData, setUserData] = useState();

  const verify_token = async () => {
    try {
      if (!token) {
        setIsLoggedIn(false);
      } else {
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.post(`${URL}/user/verify_token`);
        return response.data.ok ? login(token) : logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = (token) => {
    let decodedToken = jose.decodeJwt(token);
    let user = {
      username: decodedToken.userName,
      isAdmin: decodedToken.isAdmin,
      id: decodedToken.id,
    };
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData();
  };

  const getUserData = async () => {
    axios.defaults.headers.common["Authorization"] = token;
    try {
      const response = await axios.get(`${URL}/user/get/${user.id}`);
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    axios.defaults.headers.common["Authorization"] = token;
    try {
      const response = await axios.get(`${URL}/user/getall`);
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getUserData();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        token,
        userData,
        getUserData,
        setUserData,
        login,
        logout,
        verify_token,
        getUsers,
        setUsers,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
