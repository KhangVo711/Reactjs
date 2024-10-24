import {Link} from 'react-router-dom';

export default function Information(props) { 
    const nameUser = props.nameUsers
    return(
        <div className='flex items-center'>
        <p className='mr-2'>Hello {nameUser}</p>
        <Link className='p-1 bg-white border text-black hover:scale-110' to="/profile">Profile</Link>
        </div>
    )
 }