import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col col-lg-6 ">
            <h1 className="text-center">Login</h1>
            <form class="">
              <label for="email" className="form-label mt-2">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email..."
                required
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
              />
              <div className="mt-2 form-check">
                <input type="checkBox" className="form-check-input" id="check" />
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
