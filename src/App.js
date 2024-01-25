import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.components';
import NavBar from './routes/navbar/navbar.components';
import Shop from './routes/shop/shop.components';
import Auth from './routes/auth/auth.components';
import VerifieEmail from './routes/verifieEmail/verifieEmail.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='auth' element={<Auth></Auth>}></Route>
        <Route path='verifie' element={<VerifieEmail></VerifieEmail>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
