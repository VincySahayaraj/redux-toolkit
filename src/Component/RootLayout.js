import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from './NavBar';
import store from '../Store/store';
import {Provider} from 'react-redux';

const RootLayout = () => {
  return (
    <div>
        <Provider store={store}>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      </Provider>
    </div>
  )
}

export default RootLayout
