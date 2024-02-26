import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";

function Login() {
  const [errMsg, setErrMsg] = useState("");
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail, text, phone);
    if (text == "" || phone == "" || mail == "" || password == "") {
      setErrMsg("Please Fill the form completely");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <img
          src="https://res.cloudinary.com/dlnpuom7o/image/upload/v1708788962/l3zc2xfutkpfuxbbkcyh.png"
          alt="account"
          className="create-account-image-desktop"
        />
        <div className="bottom-container">
          <h3>Create Account</h3>
          <img
            src="https://res.cloudinary.com/dlnpuom7o/image/upload/v1708788962/l3zc2xfutkpfuxbbkcyh.png"
            alt="account"
            className="create-account-image-mobile"
          />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />{" "}
            <br />
            <input
              type="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="btn-container">
              <button className="signup-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <p className="err-msg">{errMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
