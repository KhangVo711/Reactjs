import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
export default function Login() {
  const navigate = useNavigate();
  const { setLogin } = useContext(Context);
  const [inputs, setInputs] = useState({});
  const { setData } = useContext(Context);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { username, password } = inputs;
  
    if (!username || !password) {
      alert("Giá trị rỗng");
    } else {
      try {
        const response = await axios.post('http://localhost:5000/login', { username, password });
  
        // Lưu token vào localStorage hoặc cookies sau khi đăng nhập thành công
        const token = response.data.token;
        localStorage.setItem("jwt", token);

        setLogin(true);
        const user = response.data.user;
        setData(user);
  
        // Điều hướng dựa trên vai trò của người dùng
        if (user.role === "admin") {
          window.location.href = 'http://localhost:5000/';
        } else {
          navigate('/');
        }
  
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
          <input className='border border-black rounded ml-2.5 pl-2 py-0.5' type="text" name="password" value={inputs.password} onChange={handleChange} />
        </label>
       
        <div className='flex w-full justify-center'>
          <button className='bg-white px-2 py-1 shadow-md w-1/3 hover:bg-slate-200'>Đăng nhập</button>
        </div>
        <Link className='text-center text-blue-500' to="/register">Register</Link>
      </form>
    </div>
  )
}

