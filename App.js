import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './routes/Layouts';

function App() {
  return (
    <>
      <div className="mat-typography">
        <Layout />
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
