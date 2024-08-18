import React from 'react';

const Alert: React.FC<{ text: string, type: string, show: boolean }> = ({ text, type, show }) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center text-sm'>
        <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-600'} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
            role='alert'>
            <p className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-600'} flex rounded-full uppercase px-2 py-1`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className="mr-2 text-left">
                {text}
            </p>
        </div>
    </div>
  )
}

export default Alert;