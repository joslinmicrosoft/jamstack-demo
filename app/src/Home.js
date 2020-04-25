import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="/recipes/"
        >
          Let's try some functions!
        </a>
        <a 
          className="App-link"
          href="/authenticated/"
        >
        This is gated content. Please login below.
        </a>
		        <a 
          className="App-link"
          href="/.auth/login/google"
        >
        Log in with Google
        </a>

      </header>
    </div>
  );
}

export default Home;
