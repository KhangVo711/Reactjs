import { useState } from 'react';
export default function Login() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
    
    const [isCheck, setCheck] = useState(false);
    const handleChecked = () => {
            setCheck(!isCheck)
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            if(!inputs.username || !inputs.pass)
                alert("Giá trị rỗng");
            else
                alert(`Username: ${inputs.username}` );
        }   
    
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
        <form className=' flex flex-col h-52 justify-around bg-slate-100 px-5 py-5 shadow-md' onSubmit={handleSubmit}>
            <label>Enter your username:
            <input className='border border-black rounded ml-2 pl-2 py-0.5' type="text" name="username" value={inputs.username}
onChange={handleChange} />

            </label>
            <label >Enter your password:
            <input className='border border-black rounded ml-2.5 pl-2 py-0.5' type="text" name="pass" value={inputs.pass} onChange={handleChange}   />
            </label>
            <label className='text-sm flex items-center'>
            <input type="checkbox" checked={isCheck} onChange={handleChecked}/><p>Is Admin?</p>
            </label>
            <div className='flex w-full justify-center'>
            <button className='bg-white px-2 py-1 shadow-md w-1/3 hover:bg-slate-200'>Đăng nhập</button>
            </div>
        </form>
        </div>
    )
}

