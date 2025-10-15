import { useState } from "react";
import Login from "./login";

function ComplexApp() {
  const [showLogin, setShowLogin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {showLogin && <Login closeLogin={() => setShowLogin(false)} />}

      <header className="header">
        <p>Store Locator</p>
        <p>Sell on Website</p>
       
        <div className="search-box">
          <input type="search" /><button>Search</button>
        </div>

         <details><summary>Help?
          </summary><p>Daddy</p></details>
        <button onClick={() => setShowLogin(true)} className="sign-btn">
          Sign in
        </button>

        <img
          className="menu-icon"
          src="src/images/menu-icon.png"
          alt="menu"
          onClick={() => setSidebarOpen(true)}
        />
      </header>

      <nav className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <img
          className="close-icon"
          src="src/images/close.png"
          alt="close"
          onClick={() => setSidebarOpen(false)}
        />

          <img className="logo" src="src/images/logo.png" alt="" />
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </>
  );
}

export default ComplexApp;
