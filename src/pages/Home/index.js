import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { fetchActiveQRCodesByUser } from '../../supabaseFunctions'
import { formatSupabaseDate } from '../../utils'
import { useAuth } from '../../context/authContext'

const CreatedInfoCard = ({name, date, active, id}) => (
    <Link className='px-4 py-5 flex justify-between items-center border-b border-b-gray-500' to={`/edit/${id}`}>
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

    const { user } = useAuth()
    const [qrCodes, setQrCodes] = useState([])

    useEffect(() => {
        const loadQRCodes = async () => {
            const codes = await fetchActiveQRCodesByUser(user.id)
            setQrCodes(codes)
        }

        loadQRCodes()
    }, [])


  return (
    <div className='w-full'>
        <div className='my-6 px-4 flex justify-between items-center'>
            <h1 className='font-extrabold text-xl'>Welcome back!</h1>
            <Link to='/create' className='rounded-md shadow-sm py-3 px-4 bg-blue-800 text-white text-xs font-medium'>Create QR Code</Link>
        </div>

        <div>
        {
            qrCodes.map((code, index) => (
                <CreatedInfoCard
                    name={code.title}
                    date={formatSupabaseDate(code.createdat)}
                    active={code.isactive}
                    id={code.qrcodeid}
                />
            ))
        }
        </div>
        
    </div>
  )
}
