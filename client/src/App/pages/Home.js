import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Rae Makes Comics</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button>
            My List
        </button>
      </Link>
      <Link to={'./login'}>
        <button>
            Login
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;