import React from 'react'
import { Link } from 'react-router-dom'

const CreatedInfoCard = ({name, date, active}) => (
    <Link className='px-4 py-5 flex justify-between items-center border-b border-b-gray-500' to={'/edit/1'}>
        <div>
            <h3 className='font-extrabold '>{name}</h3>
            <p className='text-xs font-gray-500'>Created on {date}</p>
        </div>
        {
            active && 
            <div className='bg-[#549E15] text-white text-xs uppercase py-1 px-3 rounded-full'>active</div>
        }
    </Link>
)

export default function Home() {
  return (
    <div className='w-full'>
        <div className='my-6 px-4 flex justify-between items-center'>
            <h1 className='font-extrabold text-xl'>Welcome back!</h1>
            <Link to='/create' className='rounded-md shadow-sm py-3 px-4 bg-blue-800 text-white text-xs font-medium'>Create QR Code</Link>
        </div>

        <div>
            <CreatedInfoCard
                name='Meras e Khizr Donations'
                date='12th July, 2021'
                active={true}
            />
             <CreatedInfoCard
                name='Meras e Khizr Donations'
                date='12th July, 2021'
                active={true}
            />
             <CreatedInfoCard
                name='Meras e Khizr Donations'
                date='12th July, 2021'
                active={true}
            />
        </div>
        
    </div>
  )
}
