
import React from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';


const App = () => {

  return (
    <div className="App">

      <PerfectScrollbar>
        <NavBar />
        <AppRoutes />

      </PerfectScrollbar>

    </div>
  );
};

export default App;
