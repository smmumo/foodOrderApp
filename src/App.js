import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

//https://github.com/academind/react-complete-guide-code/tree/11-practice-food-order-app/extra-files

function App() {
  return (
     <Fragment>
       <Header/>
       <main>
         <Meals/>
       </main>
     </Fragment>
  );
}

export default App;
