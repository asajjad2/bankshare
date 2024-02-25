import React from 'react';
import { Link } from 'react-router-dom'; 

import Input from '../../components/Input';

export default function Signup() {
  return (
    <div className='flex flex-col justify-between w-full flex-grow px-4 py-6 space-y-6'>
        <div className='space-y-6'>
            <div className='space-y-1'>
                <h1 className='text-xl font-extrabold'>Sign Up</h1>
                <p className='text-gray-500 text-sm'>Let's get started!</p>
            </div>
            <div className='space-y-6 flex flex-col'>
                <Input label='Email' type='email' placeholder='Enter email' />
                <Input label='Name' type='text' placeholder='Enter name' />
                <Input label='Password' type='password' placeholder='Enter password' />            
                <button className='w-full rounded-md py-3 px-4 bg-blue-800 text-white font-medium shadow-sm'>Sign Up</button>
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
