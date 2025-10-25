import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail } from "./UserSlice";

const App = () => {
  const { name, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>

      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          id="name-input"
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          id="email-input"
        />
      </div>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;
