import "./form.css";


function Login({ closeLogin }) {
  return (
    <div className="overlay">
      <div className="login-form">
        <h1 className="centre">Sign Up</h1>
        <p className="centre">Please fill in this form to create an account</p>
       
       <div>
         <label>Username:</label><br />
        <input className="input-text" type="text" placeholder="Username" required autoComplete="off" />
       </div>

       <div>
        <label>Email:</label><br />
        <input className="input-text" type="email"  required autoComplete="off"/>
       </div>

        <div>
          <label>Password:</label><br />
        <input className="input-text" type="password" placeholder="Password" required autoComplete="off" />
        </div>


        <div>
          <label>Confirm Password:</label> <br />
          <input className="input-text" type="password" placeholder="confirm password" required autoComplete="off" />
        </div>

        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>

        <p className="centre">By creating this account you agree to our <a href="">Term & Policies</a>.</p>

          <button className="login">Login</button>
          <button onClick={closeLogin} className="close">Cancel</button>
        
      </div>
    </div>
  );
}

export default Login;
