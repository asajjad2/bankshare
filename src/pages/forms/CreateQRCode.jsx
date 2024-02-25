import React from 'react'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
export default function CreateQRCode() {
  return (
    <div className='py-6 px-4 space-y-6'>
        <div>
            <h1 className='font-extrabold text-xl'>Create a QR Code</h1>
            <p className='text-gray-500 text-sm'>Add bank details to generate QR Code</p>
        </div>
        <div className='space-y-8'>

            <Input 
                label={'Title'}
                placeholder={'Enter a title'}
                type={'text'}
                detail={'Donation Drive for Meras e Khizr'}
            />

            <Input 
                label={'Bank Name'}
                placeholder={'Enter a bank name'}
                type={'text'}
            />

            <Input
                label={'Account Title'}
                placeholder={'Enter account title'}
                type={'text'}
            />

            <Input
                label={'Account Number'}
                placeholder={'Enter account number'}
                type={'text'}
            />

            <Input
                label={'IBAN Number'}
                placeholder={'Enter iban number'}
                type={'text'}
            />

            <Input
                label={'Swift Number'}
                placeholder={'Enter swift number'}
                type={'text'}
            />

        </div>

        <button className='w-full bg-blue-800 text-white rounded-md shadow-sm py-3 px-4 font-medium'>
            <Link to={'/qr-ready/1'}>Create QR Code</Link>
        </button>
    </div>
  )
}
