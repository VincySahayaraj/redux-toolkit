import logo from './logo.svg';
import './App.css';
import Product from './Component/product'
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Cart from './Component/Cart';
import Dashboard from './Component/Dashboard';
import RootLayout from './Component/RootLayout';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
