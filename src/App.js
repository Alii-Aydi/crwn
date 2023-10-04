import Home from './routes/home/home.components';
import { Route, Routes } from 'react-router-dom';
import NavBar from './routes/navbar/navbar.components';
import Shop from './routes/shop/shop.components';
import SignIn from './routes/sign-in/sign-in.components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='sign-in' element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
