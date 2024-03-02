import React, { useEffect, useState } from 'react'
import FeatherIcon from 'feather-icons-react';

import { useParams } from 'react-router-dom';
import { fetchQRCodeDetails } from '../../supabaseFunctions';

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

// const dummyData = {
//     'Bank Name' : 'Meezan Bank',
//     'Account Title' : 'Muhammad Munaf Ul Hassan',
//     'Account Number' : '1324908712359807389',
//     'IBAN Number' : '1324908712359807389',
//     'Swift Code' : 'MEZNPKKA'
// }

const mapOntoData = (response) => {

    const data = {
        'Bank Name' : response.bankname,
        'Account Title' : response.accounttitle,
        'Account Number' : response.accountnumber,
        'IBAN Number' : response.iban,
        'Swift Code' : response.swift
    }

    return data;
}

export default function QRCodeDisplay() {


    const { id } = useParams();
    const [qrCodeDetails, setQRCodeDetails] = useState({});

    useEffect(() => {
        const loadQRCodeDetails = async () => {
            const details = await fetchQRCodeDetails(+id)
            setQRCodeDetails(mapOntoData(details[0]))
        }

        if (id) {
            loadQRCodeDetails()
        }

    }, [id]);


    if(!qrCodeDetails) return (
        <div className='w-full h-full flex justify-center items-center'>
            <h1>Loading...</h1>
        </div>
    )
    else return (
    <div className='w-full'>
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
                    qrCodeDetails && Object.keys(qrCodeDetails).map((key, index) => {
                        return (
                            <InfoCard key={index} title={key} value={qrCodeDetails[key]} copy={true}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
