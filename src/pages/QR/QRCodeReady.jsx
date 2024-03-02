import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function QRCodeReady() {

  const { id } = useParams();

  return (
    <div className='space-y-6 py-6 px-4'>
        <div>
            <h1 className='font-extrabold text-xl'>Your QR Code is Ready</h1>
            <p className='text-gray-500 text-sm'>Share this QR Code to get started</p>
        </div>
        <div className='rounded-lg w-full h-80 bg-gray-500'></div>
        <div className='space-y-2'>
            <button className='w-full bg-blue-800 text-white rounded-md shadow-sm py-3 px-4 font-medium'>Download as Image</button>
            <button className='w-full bg-gray-200 rounded-md shadow-sm py-3 px-4 font-medium'>
                <Link to={`/qr/${id}`}>Open Preview Link</Link>
           </button>
        </div>
    </div>
  )
}
