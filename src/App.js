import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { LanguageProvider } from './Context/LanguageContext'; // Replace with the actual path


function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Router>
          <AllRoutes />
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
