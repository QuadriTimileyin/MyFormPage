import React from 'react';



export class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        errors: [],
        pwdState: null,
      };
    }

    showValidationErr(elm, msg) {
      this.setState((prevState) =>({
        errors: [...prevState.errors, { elm, msg }],
      }));
    }

    clearValidationErr(elm, msg) {
      this.setState((prevState) => {
        let newArr= [];
        for (let err of prevState.errors) {
          if (elm !== err.elm) {
            newArr.push(err);
          }
          return {errors : newArr};
        }
      });
    }

    onUsernameChange(e) {
      this.setState({username : e.target.value});
      this.clearValidationErr("username");
    }

    onPasswordChange(e) {
      this.setState({password : e.target.value});
      this.clearValidationErr("password")
    }
  
    submitLogin(e) {
      if (this.state.username === "") {
        this.showValidationErr("username", "username cannot be empty!");
      } if (this.state.password === "") {
        this.showValidationErr("password", "password cannot be empty");
      }
    }
  
    render() {

let usernameErr = null,
 passwordErr = null;

for (let err of this.state.errors) {
if (err.elm === "username") {
  usernameErr = err.msg;
} 
if (err.elm === "password") {
  passwordErr = err.msg;
}

}



      return (
       
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                  onChange={this.onUsernameChange.bind(this)}
                />
                <small className="danger-error">
                  {usernameErr ? usernameErr : ""}
                </small>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                  onChange={this.onPasswordChange.bind(this)}
                />
                <small className="danger-error">
                  {passwordErr ? passwordErr : ""}
                </small>
            
            </div>
  
 
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      );
    }
  
  }