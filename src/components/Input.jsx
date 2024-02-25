const Input = ({ label, type, placeholder }) => {
    return (
        <div className='flex flex-col space-y-2'>
        <label htmlFor={label} className='text-sm font-medium'>{label}</label>
        <input type={type} placeholder={placeholder} className='rounded-md py-1 px-3 border border-gray-300 text-sm' />
        </div>
    );
}

export default Input;