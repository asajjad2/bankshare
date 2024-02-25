import React from 'react';
import { Link } from 'react-router-dom'; 

import Input from '../../components/Input';

export default function ForgotPassword() {
  return (
    <div className='flex flex-col justify-between w-full flex-grow px-4 py-6 space-y-6'>
        <div className='space-y-6'>
            <div className='space-y-1'>
                <h1 className='text-xl font-extrabold'>Forgot Password</h1>
                <p className='text-gray-500 text-sm'>Enter your email to reset the password</p>
            </div>
            <div className='space-y-6 flex flex-col'>
                <Input label='Email' type='email' placeholder='Enter email' />         
                <button className='w-full rounded-md py-3 px-4 bg-blue-800 text-white font-medium shadow-sm'>Reset Password</button>
            </div>
        </div>
    </div>
  );
}
