import React, { useEffect, useState, useRef } from 'react';
import jwt_decode from 'jwt-decode';

const LoginForm = () => {
  const [user, setUser] = useState({});
  const logoutTimeoutRef = useRef(null);
  

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    localStorage.setItem('loggedInUser', JSON.stringify(userObject));
    resetLogoutTimeout();
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    localStorage.removeItem('loggedInUser');
    clearLogoutTimeout();
  }

  function resetLogoutTimeout() {
    clearLogoutTimeout();
    logoutTimeoutRef.current = setTimeout(handleSignOut, 10 * 60 * 1000); // 10 minutes
  }

  function clearLogoutTimeout() {
    if (logoutTimeoutRef.current) {
      clearTimeout(logoutTimeoutRef.current);
      logoutTimeoutRef.current = null;
    }
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "1091226882328-hn5gfrc9m92g3c4i69u99mivlpe3foqh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();

    // Mengecek apakah user sudah melakukan login dari session sebelumnya
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      document.getElementById("signInDiv").hidden = true;
      resetLogoutTimeout();
    }

    return () => {
      clearLogoutTimeout();
    };
  }, []);

  return (
    <div id="login" className="block loginBlock">
      <div className="container-fluid">
        <div className="wholelogincontainer">
          <div className="wholelogincontainer2">
            <div className="titleHolder5">
              <h2>{Object.keys(user).length !== 0 ? 'My Account' : 'Login to Your Account'}</h2>
            </div>
            <div className="loginContainer">
              <div id="signInDiv"></div>
              {user && (
                <div>
                  <img src={user.picture} alt=' '></img>
                  <h3>{user.name}</h3>
                  <h3>{user.email}</h3>
                </div>
              )}
              {Object.keys(user).length !== 0 && (
                <button className="signOutButton" onClick={handleSignOut}>Sign Out</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;