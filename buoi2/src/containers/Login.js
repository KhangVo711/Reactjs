import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
    
    const [isCheck, setCheck] = useState(false);
    const handleChecked = () => {
        setCheck(!isCheck);
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Destructure inputs to get username and password
        const { username, password } = inputs;
      
        if (!username || !password) {
          alert("Giá trị rỗng");
        } else {
          try {
            // Use axios to make the POST request to the login endpoint
            const response = await axios.post('http://localhost:5000/login', {
              username,
              password,
            });
      
            // Handle the result (e.g., save user data, redirect, etc.)
            console.log(response.data);
            navigate('/');
            
          } catch (error) {
            console.error('Error during login:', error);
            alert('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.');
          }
        }
      };
    
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
        <form className=' flex flex-col h-52 justify-around bg-slate-100 px-5 py-5 shadow-md' onSubmit={handleSubmit}>
            <label>Enter your username:
            <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="username" value={inputs.username}
onChange={handleChange} />

            </label>
            <label >Enter your password:
            <input className='border border-black rounded ml-2.5 pl-2 py-0.5' type="text" name="password" value={inputs.pass} onChange={handleChange}   />
            </label>
            <label className='text-sm flex items-center'>
            <input type="checkbox" checked={isCheck} onChange={handleChecked}/><p>Is Admin?</p>
            </label>
            <div className='flex w-full justify-center'>
            <button className='bg-white px-2 py-1 shadow-md w-1/3 hover:bg-slate-200'>Đăng nhập</button>
            </div>
            <Link className='text-center text-blue-500' to="/register">Register</Link>
        </form>
        </div>
    )
}

