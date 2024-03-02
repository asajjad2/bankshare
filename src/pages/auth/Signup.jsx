import { Link } from 'react-router-dom'; 
import Input from '../../components/Input';
import { useState } from 'react';

import { useAuth } from '../../context/authContext';

export default function Signup() {

  const { signUp } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await signUp(email, password);

    if (error) {
      setError(error.message);
    } else {
      console.log(data);
    }
    setLoading(false);
  };


  return (
    <div className='flex flex-col justify-between w-full flex-grow px-4 py-6 space-y-6'>
        <div className='space-y-6'>
            <div className='space-y-1'>
                <h1 className='text-xl font-extrabold'>Sign Up</h1>
                <p className='text-gray-500 text-sm'>Let's get started!</p>
            </div>
            <div className='space-y-6 flex flex-col'>
                <Input label='Email' type='email' placeholder='Enter email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input label='Password' type='password' placeholder='Enter password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />            
                <button className='w-full rounded-md py-3 px-4 bg-blue-800 text-white font-medium shadow-sm' onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
        <div className='w-full text-center'>
            <p className='font-medium text-sm'>
              Already have an account?
              <Link to="/login" className='cursor-pointer text-blue-800'> Sign In</Link>
            </p>
        </div>
    </div>
  );
}
