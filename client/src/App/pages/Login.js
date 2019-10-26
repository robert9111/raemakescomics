import React, { Fragment, Component } from 'react';

class Login extends Component {
  render() {
    return (
    <Fragment>
        <form>
            <label className="formLabel">Email</label>
            <input type="email" name="email" className="formInput"/>
            <label className="formLabel">Password</label>
            <input type="password" name="password" className="formInput"/>
        </form>
    </Fragment>
    );
  }
}
export default Login;