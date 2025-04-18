

import './App.css';
import './AppResponsive.css';
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductList from './components/ProductList';
import ProductEdit from './pages/ProductEdit';
import ProductView from './pages/ProductView';
import ProductUpload from './pages/ProductUpload';
import { Route, Routes } from 'react-router';
import Addcategory from './pages/AddCategory';
import GetCategory from './pages/GetCategory';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from "react-top-loading-bar";


const Mycontext = createContext();
function App() {

  const [toggle, settoggle] = useState(false);
  const [light, setlight] = useState(false);
  const [headershow, setheadershow] = useState(true);
  const [progress, setProgress] = useState(0);

  const [alertBox, setalertBox] = React.useState({
    open: false,
    color: '',
    msg: ''
  });

  const values = {
    toggle,
    settoggle,
    light,
    setlight,
    headershow,
    setheadershow,
    alertBox,
    setalertBox,
    setProgress
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setalertBox({
      open: false,
      msg: ''
    })
  };

  return (
    <Mycontext.Provider value={values}>
      <>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          style={{ height: '4px' }}
        />
        <Snackbar open={alertBox.open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            // severity="success"
            severity={alertBox.color}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>

        {headershow && <Header />}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/product' element={<ProductList />} />
          <Route path='/product/view' element={<ProductView />} />
          <Route path='/product/upload' element={<ProductUpload />} />
          <Route path='/product/edit/:id' element={<ProductEdit />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/category/add' element={<Addcategory />} />
          <Route path='/category/list' element={<GetCategory />} />
        </Routes>
      </>
    </Mycontext.Provider>
  )
}

export default App;
export { Mycontext };
