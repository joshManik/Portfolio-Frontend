import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState} from 'react';
import axios from 'axios';


const MyImage = (props) => {

  const [myImage, setImage] = useState("");

  useEffect(() => {
    loadDataOnlyOnce();
  }, [])

  const loadDataOnlyOnce = () => {
    axios.get('http://localhost:4000/get/table').then(res => {
      setImage(res.data)
    })
    console.log(myImage)
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={'..\\..\\uploads\\6828454d7b74bca3c81ebb01e9870541'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MyImage;