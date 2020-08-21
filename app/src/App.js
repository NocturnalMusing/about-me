import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route } from 'react-router-dom'

import MainPage from './screens/MainPage'
import ResumePage from './screens/ResumePage'

function App() {
  return (
    <>
      <Route exact path='/' render={() => (
          <MainPage />
        )}
      />

      <Route path='/resume' render={() => (
          <ResumePage />
        )} 
      />
    </>
  )
}

export default App;
