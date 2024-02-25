import React from 'react';
import { Link } from 'react-router-dom'; 

import Input from '../../components/Input';

export default function Login() {
  return (
    <div className='flex flex-col justify-between w-full flex-grow px-4 py-6 space-y-6'>
        <div className='space-y-6'>
            <div className='space-y-1'>
                <h1 className='text-xl font-extrabold'>Login</h1>
                <p className='text-gray-500 text-sm'>Please enter your credentials</p>
            </div>
            <div className='space-y-6 flex flex-col'>
                <Input label='Email' type='email' placeholder='Enter your email' />
                <Input label='Password' type='password' placeholder='Enter your password' />
                <Link to="/forgot-password" className='font-medium text-sm text-right'>Forgot Password?</Link>
                <button className='w-full rounded-md py-3 px-4 bg-blue-800 text-white font-medium shadow-sm'>Login</button>
            </div>
        </div>
        <div className='w-full text-center'>
            <p className='font-medium text-sm'>
              Don't have an account? 
              <Link to="/signup" className='cursor-pointer text-blue-800'> Sign Up</Link>
            </p>
        </div>
    </div>
  );
}
