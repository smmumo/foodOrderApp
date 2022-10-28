import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

//https://github.com/academind/react-complete-guide-code/tree/11-practice-food-order-app/extra-files

function App() {
  
  const [CartisShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
     <Fragment>
      { CartisShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
         <Meals/>
       </main>
     </Fragment>
  );
}

export default App;
