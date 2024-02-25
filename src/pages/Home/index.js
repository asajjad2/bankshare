import React from 'react'
import FeatherIcon from 'feather-icons-react';

const InfoCard = ({title, value, copy}) => {

    const copyValue = () => {
        navigator.clipboard.writeText(value);
    }

    return (

        <div className='flex justify-between items-end'>
            <div className='space-y-1'>
                <h3 className='text-gray-500 font-semibold text-sm'>{title}</h3>
                <h2 className='font-semibold text-xl'>{value}</h2>
            </div>
            {
                copy && <FeatherIcon icon='copy' size={20} className='cursor-pointer text-gray-300' onClick={copyValue}/>
            }
        </div>
        
    )
}

const data = [
    {
        title: 'Bank Name',
        value: 'Meezan Bank'
    },
    {
        title: 'Account Title',
        value: 'Muhammad Munaf Ul Hassan'
    },
    {
        title: 'Account Number',
        value: '1324908712359807389',
        copy: true
    },
    {
        title: 'IBAN Number',
        value: '1324908712359807389',
        copy: true
    },
    {
        title: 'Swift Code',
        value: 'MEZNPKKA',
        copy: true
    }
]

export default function Home() {
  return (
    <div className='w-full'>
        <div className='py-5 px-3 uppercase bg-blue-800 text-white text-center text-lg font-extrabold'>bankshare</div>
        <div className='px-4 py-8 space-y-10'>
            <div className='space-y-4'>
                <h1 className='text-3xl text-blue-800 font-extrabold'>Donate to Our Cause Today</h1>
                <h4 className='bg-blue-50 rounded-full px-3 py-1 text-blue-600 text-xs w-fit gap-2 flex items-center'>
                    Viewed 24 times in the last hour
                    <FeatherIcon icon='arrow-up-right' size={15}/>
                </h4>
            </div>
            <div className='space-y-5'>
                {
                    data.map((item, index) => (
                        <InfoCard key={index} title={item.title} value={item.value} copy={item.copy}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
