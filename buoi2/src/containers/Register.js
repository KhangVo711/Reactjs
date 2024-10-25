import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const [isCheck, setCheck] = useState(false);
    const [isRole, setRole] = useState('user');
    const handleChecked = () => {
        setCheck(!isCheck)
        if (!isCheck)
            setRole('admin')
        else
            setRole('user')
    }
    // console.log(isCheck)
    // console.log(isRole)
    const { username, password, fullname, address, sex, email} = inputs;
    const role = isRole;
    console.log(username, password, role, fullname, address, sex, email)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!inputs.username || !inputs.password || !inputs.fullname || !inputs.sex || !inputs.email || !inputs.address)
            alert("Giá trị rỗng");
        else
            try {
                const response = await axios.post('http://localhost:5000/register', {
                    username,
                    password,
                    role,
                    fullname,
                    address,
                    sex,
                    email
                });
                if (response.status === 200) {
                    alert('Đăng ký thành công');
                    navigate('/login');
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {

                    alert('Tài khoản đã tồn tại');
                } else {
                    // Handle other server errors
                    console.error('Error during registration:', error);
                    alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.');
                }
            }
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <form className=' flex flex-col h-72 justify-around bg-slate-100 px-5 py-5 shadow-md' onSubmit={handleSubmit}>
                <label>Enter your username:
                    <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="username" value={inputs.username}
                        onChange={handleChange} />

                </label>
                <label >Enter your password:
                    <input className='border border-black rounded ml-2.5 pl-2 py-0.5' type="text" name="password" value={inputs.password} onChange={handleChange} />
                </label>
                <label>Enter your fullname:
                    <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="fullname" value={inputs.fullname}
                        onChange={handleChange} />

                </label>
                <label>Enter your sex:
                    <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="sex" value={inputs.sex}
                        onChange={handleChange} />

                </label>
                <label>Enter your email:
                    <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="email" value={inputs.email}
                        onChange={handleChange} />

                </label>
                <label>Enter your address:
                    <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="address" value={inputs.address}
                        onChange={handleChange} />

                </label>
                <label className='text-sm flex items-center'>
                    <input type="checkbox" checked={isCheck} onChange={handleChecked} /><p>Is Admin?</p>
                </label>
                <div className='flex w-full justify-center'>
                    <button className='bg-white px-2 py-1 shadow-md w-1/3 hover:bg-slate-200'>Đăng kí</button>
                </div>
            </form>
        </div>
    )
}

