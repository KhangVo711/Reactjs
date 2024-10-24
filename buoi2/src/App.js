
import { Outlet } from 'react-router-dom';
import './App.css';
import Button from './containers/Button.js';
import Car from './containers/Car.js';
import Hello from './containers/Hello.js';
import Login from './containers/Login.js';
import Menu from './containers/Menu.js';

function App() {
  const name = "Khang Vo"

  return (
    <div className="relative h-screen">
    <Menu name = {name}/>
    <Button/>
    <Outlet/>
    </div>
  );
}

export default App;
