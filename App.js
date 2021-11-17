import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
