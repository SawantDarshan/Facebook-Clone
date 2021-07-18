import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import { actionTypes } from "./Reducer";

function Login() {
  // const [ state , dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {

    //     dispatch({
    //         Type: actionTypes.SET_USER,
    //         user: result.user,
    //     })

        console.log(result.user);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
