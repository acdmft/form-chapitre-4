import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePwdInput = this.handlePwdInput.bind(this);
  }

  handleEmailInput(e) {
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if (e.target.value.match(pattern)){
      e.target.className = "form-control is-valid"; 
    } else {
      e.target.className = "form-control is-invalid";
    }
  }

  handlePwdInput(e) {
    let pattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (e.target.value.match(pattern)){
      e.target.className = "form-control is-valid"; 
    } else {
      e.target.className = "form-control is-invalid";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handlesubmit')
  }

  render() {
    return(
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col col-lg-6 ">
            <h1 className="text-center">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <label for="email" className="form-label mt-2">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email..."
                required
                onChange={this.handleEmailInput}
              />
              <label for="password" className="form-label mt-2">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password..."
                required
                onChange={this.handlePwdInput}      
              />
              <div className="mt-2 form-check">
                <input type="checkBox" className="form-check-input" id="checkBox" />
                <label className="form-check-label" for="checkBox">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
