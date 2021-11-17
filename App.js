import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
