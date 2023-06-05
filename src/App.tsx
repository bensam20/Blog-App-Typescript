import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import AuthenticationContext from './modules/Authentication/AuthenticationContext';
import BlogDataContext from './context/BlogContext';
import "primereact/resources/themes/lara-light-indigo/theme.css";       
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <AuthenticationContext>
          <BlogDataContext>
            <Router />
          </BlogDataContext>
        </AuthenticationContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
