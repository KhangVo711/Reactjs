import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../containers/Login';
import Car from '../containers/Car';
import Hello from '../containers/Hello';
import Add from '../containers/Add';
import Register from '../containers/Register';
import Profile from '../containers/Profile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App đóng vai trò layout chính
    children: [
      { path: "login", element: <Login /> },    // Các route con
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "car", element: <Car /> },
      { path: "hello", element: <Hello /> },
      { path: "add", element: <Add /> },
      { path: "*", element: <div>Không tìm thấy web theo yêu cầu</div> }
    ]
  }
]);
