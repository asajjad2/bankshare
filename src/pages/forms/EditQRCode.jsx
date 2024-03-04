import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Input from '../../components/Input'

import { updateQRCode } from '../../supabaseFunctions';

const initialObject = {
    title: '',
    bankname: '',
    accounttitle: '',
    accountnumber: '',
    iban: '',
    swift: ''
}

export default function EditQRCode() {

    const { id } = useParams();
    const [updates, setUpdates] = useState(initialObject);

    const handleInputChange = (e) => {
        setUpdates({
            ...updates,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdateQRCode = async () => {

        //only keep the fields that have been updated
        const updatedFields = Object.keys(updates).reduce((acc, key) => {
            if (updates[key] !== initialObject[key]) {
                acc[key] = updates[key];
            }
            return acc;
        }, {});

        try {
          const response = await updateQRCode(id, updatedFields);
        //   console.log('QR Code updated:', response);
        } catch (error) {
          console.error('Error updating QR Code:', error);
        }
    }


  return (
    <div className='py-6 px-4 space-y-6'>
        <div>
            <h1 className='font-extrabold text-xl'>Edit</h1>
            <p className='text-gray-500 text-sm'>Update details and click on “Save Changes</p>
        </div>
        <div className='space-y-8'>

            <Input 
                label={'Title'}
                placeholder={'Enter a title'}
                type={'text'}
                detail={'Donation Drive for Meras e Khizr'}
                name={'title'}
                value={updates.title}
                onChange={handleInputChange}
            />

            <Input 
                label={'Bank Name'}
                placeholder={'Enter a bank name'}
                type={'text'}
                name={'bankname'}
                value={updates.bankname}
                onChange={handleInputChange}
            />

            <Input
                label={'Account Title'}
                placeholder={'Enter account title'}
                type={'text'}
                name={'accounttitle'}
                value={updates.accounttitle}
                onChange={handleInputChange}
            />

            <Input
                label={'Account Number'}
                placeholder={'Enter account number'}
                type={'text'}
                name={'accountnumber'}
                value={updates.accountnumber}
                onChange={handleInputChange}
            />

            <Input
                label={'IBAN Number'}
                placeholder={'Enter iban number'}
                type={'text'}
                name={'iban'}
                value={updates.iban}
                onChange={handleInputChange}
            />

            <Input
                label={'Swift Number'}
                placeholder={'Enter swift number'}
                type={'text'}
                name={'swift'}
                value={updates.swift}
                onChange={handleInputChange}
            />

        </div>

        <button className='w-full bg-blue-800 text-white rounded-md shadow-sm py-3 px-4 font-medium'
            onClick={handleUpdateQRCode}
        >Save Changes</button>
    </div>
  )
}
