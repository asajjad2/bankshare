import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input'

import { insertQRCode } from '../../supabaseFunctions';
import { useAuth } from '../../context/authContext';

const initialQRData = {
    p_user_id: '', 
    p_title: "",
    p_bank_name: "",
    p_account_title: "",
    p_account_number: "",
    p_iban: "",
    p_swift: "",
    p_qrcode_data: "" 
};
  
  

export default function CreateQRCode() {

    const Navigate = useNavigate();
    const { user } = useAuth();

    initialQRData.p_user_id = user.id;
    const [qrCodeData, setQrCodeData] = useState(initialQRData);

    const handleInputChange = (e) => {
        setQrCodeData({
            ...qrCodeData,
            [e.target.name]: e.target.value
        });

        // console.log(qrCodeData);
    }

    const handleCreateQRCode = async () => {
        try {
          const response = await insertQRCode(qrCodeData);
        //   console.log('QR Code created:', response);
          Navigate(`/qr-ready/${response}`)
        } catch (error) {
          console.error('Error creating QR Code:', error);
        }
      }


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
                value={qrCodeData.p_title}
                name={'p_title'}
                onChange={handleInputChange}
            />

            <Input 
                label={'Bank Name'}
                placeholder={'Enter a bank name'}
                type={'text'}
                value={qrCodeData.p_bank_name}
                name={'p_bank_name'}
                onChange={handleInputChange}
            />

            <Input
                label={'Account Title'}
                placeholder={'Enter account title'}
                type={'text'}
                value={qrCodeData.p_account_title}
                name={'p_account_title'}
                onChange={handleInputChange}
            />

            <Input
                label={'Account Number'}
                placeholder={'Enter account number'}
                type={'text'}
                value={qrCodeData.p_account_number}
                name={'p_account_number'}
                onChange={handleInputChange}
            />

            <Input
                label={'IBAN Number'}
                placeholder={'Enter iban number'}
                type={'text'}
                value={qrCodeData.p_iban}
                name={'p_iban'}
                onChange={handleInputChange}
            />

            <Input
                label={'Swift Number'}
                placeholder={'Enter swift number'}
                type={'text'}
                value={qrCodeData.p_swift}
                name={'p_swift'}
                onChange={handleInputChange}
            />

        </div>

        <button className='w-full bg-blue-800 text-white rounded-md shadow-sm py-3 px-4 font-medium'
            onClick={handleCreateQRCode}
        >
            {/* <Link to={'/qr-ready/1'}>Create QR Code</Link> */}
            Create QR Code
        </button>
    </div>
  )
}
