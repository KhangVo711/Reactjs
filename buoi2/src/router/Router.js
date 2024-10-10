import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../containers/Login';
import Car from '../containers/Car';
import Hello from '../containers/Hello';
import Add from '../containers/Add';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/car",
        element: <Car />
    },
    {
        path: "/hello",
        element: <Hello />
    },
    {
        path: "/add",
        element: <Add/>
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);